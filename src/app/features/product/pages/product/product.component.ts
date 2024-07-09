import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { GetAllProductVariation } from 'src/app/shared/interfaces/get-all-product-variation.interface';
import { GetProductStock } from 'src/app/shared/interfaces/get-product-stock.interface';
import { ProductService } from 'src/app/shared/services/product.service';

interface ProductScreen {
  Produto: string,
  Quantidade: number
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public textToFilter = '';
  public displayedColumns: string[] = ['Produto', 'Quantidade'];
  public products: Array<GetAllProductVariation> = [];
  public productsVariations: Array<GetProductStock> = []
  public productsScreen: Array<ProductScreen> = [];
  public filteredProductsScreen: Array<ProductScreen> = [];

  constructor(
    private readonly productService: ProductService
  ) {
  }

  public onChangeFilter(): void {
    if (this.textToFilter && this.textToFilter.length > 0) {
      this.filteredProductsScreen = [...this.productsScreen].filter((product) => product.Produto.includes(this.textToFilter));
    } else {
      this.filteredProductsScreen = [...this.productsScreen];
    }
  }

  public ngOnInit(): void {
    this.productService.getAllProducts(false).pipe(
      switchMap((products) => {
        this.products = products;
        const requests: Array<Observable<GetProductStock>> = [];
        products.forEach((product) => {
          requests.push(this.productService.getProductVariations(product.productId));
        });
        return forkJoin(requests);
      })
    )
      .subscribe((productsVariations) => {
        this.productsVariations = productsVariations;
        this.products.forEach((product) => {
          this.productsScreen.push({
            Produto: product.description,
            Quantidade: this.productsVariations.find((variation) => variation.id === product.id)!.stock
          });
        })
        this.filteredProductsScreen = [...this.productsScreen];
      });
  }

}
