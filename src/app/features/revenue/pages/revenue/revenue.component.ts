import { Component, OnInit } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { SellService } from 'src/app/shared/services/sell.service';

interface SaleInfoScreen {
  Descricao: string,
  Data: Date,
  Valor: number
}

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  public saleInfoScreen: Array<SaleInfoScreen> = [];

  constructor(
    private readonly sellService: SellService,
    private readonly productService: ProductService
  ) {
  }

  public ngOnInit(): void {

    this.sellService.getAll().subscribe((salesInfo) => {

      // salesInfo.forEach((saleInfo) => {
      //   this.saleInfoScreen.push({
      //     Descricao: saleInfo.clientName,
      //     Data: saleInfo.
      //   })
      // })
      console.log(salesInfo)
    })
  }


}
