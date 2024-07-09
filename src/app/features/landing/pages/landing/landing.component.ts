import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GetAllProductVariation } from 'src/app/shared/interfaces/get-all-product-variation.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { SellService } from 'src/app/shared/services/sell.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly productService: ProductService,
    private readonly sellService: SellService
  ) {
  }

  public monthName = '';
  public profit = '';
  public revenue = '';
  public displayedColumns: string[] = ['Descricao', 'Valor'];
  public products: Array<GetAllProductVariation> = [];

  public onClickNavigate(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  public ngOnInit(): void {
    forkJoin([
      this.sellService.getAll(),
      this.productService.getAllProducts(true)
    ]).subscribe(([salesInfo, products]) => {
      [this.revenue, this.profit] = this.sellService.getRevenueAndProfit(salesInfo);
      this.products = products;
    });

    this.monthName = this.sellService.getCurrentMonth();
  }

}
