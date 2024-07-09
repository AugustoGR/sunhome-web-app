import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetAllProductVariation } from 'src/app/shared/interfaces/get-all-product-variation.interface';
import { GetProductStock } from 'src/app/shared/interfaces/get-product-stock.interface';
import { Sale } from 'src/app/shared/models/sale.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { SellService } from 'src/app/shared/services/sell.service';
interface ProductScreen {
  Id: string,
  Produto: string,
  Valor: number
};

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  public clientName: string = '';
  public displayedColumns: string[] = ['select', 'Produto', 'Valor'];
  public productsVariations: Array<ProductScreen> = []
  public selection = new SelectionModel<any>(true, []);
  public sumValue: string = 'R$ 00,00';

  constructor(
    private readonly productService: ProductService,
    private readonly sellService: SellService,
    private readonly matSnackBar: MatSnackBar,
    private readonly router: Router
  ) {
  }

  private calculateSumValue(): void {
    const sum = this.selection.selected.reduce((acc, curr) => +acc + +curr.Valor, 0);
    this.sumValue = `R$ ${sum.toFixed(2)}`;
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.productsVariations.length;
    return numSelected === numRows;
  }

  public isIndeterminate() {
    return this.selection.hasValue() && !this.isAllSelected();
  }

  public masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.productsVariations.forEach(row => this.selection.select(row));
    this.calculateSumValue();

  }

  public toggleSelection(row: any) {
    this.selection.toggle(row);
    this.calculateSumValue();
  }

  public newSale(): void {
    if (this.clientName && this.clientName.length > 0 && this.selection.selected.length > 0) {
      const saleProducts: Array<{
        productVariationId: string;
        quantity: number;
        unitPrice: number;
      }> = [];
      this.selection.selected.forEach((item) => {
        saleProducts.push({
          productVariationId: item.Id,
          quantity: 1,
          unitPrice: item.Valor
        });
      });
      const sale = new Sale({
        clientName: this.clientName,
        saleProducts: saleProducts
      })
      this.sellService.newSale(sale).subscribe(() =>{
        this.matSnackBar.open('Venda Realizada', 'Ok');
        this.router.navigate(['/landing']);
      });
    }

  }

  public ngOnInit(): void {
    this.productService.getAllProducts(false).subscribe((productsVariations) => {
      this.productsVariations = [...productsVariations].map((variation) => {
        return {
          Produto: variation.description,
          Valor: variation.price,
          Id: variation.id
        } as ProductScreen
      });
    });
  }


}
