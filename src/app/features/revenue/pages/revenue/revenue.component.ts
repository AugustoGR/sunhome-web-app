import { Component, OnInit } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { SaleInfo } from 'src/app/shared/interfaces/sale-info.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { SellService } from 'src/app/shared/services/sell.service';

interface SaleInfoScreen {
  Descricao: string,
  Data: Date,
  Valor: string
}

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  public saleInfoScreen: Array<SaleInfoScreen> = [];
  public displayedColumns: string[] = ['Descricao', 'Data', 'Valor'];
  public currentMonth = '';
  public profit = 'R$ 00.00';
  public revenue = 'R$ 00.00';
  constructor(
    private readonly sellService: SellService
  ) {
  }

  public ngOnInit(): void {

    this.currentMonth = this.sellService.getCurrentMonth();

    this.sellService.getAll().subscribe((salesInfo) => {

      salesInfo.forEach((saleInfo) => {
        saleInfo.SaleProductVariation.forEach((variation) => {
          this.saleInfoScreen.push({
            Descricao: saleInfo.clientName,
            Data: saleInfo.createdAt,
            Valor: `R$ ${variation.unitPrice}.00`
          });
        });
      });
      console.log(salesInfo);
      [this.revenue, this.profit] = this.sellService.getRevenueAndProfit(salesInfo);
    });
  }


}
