import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllProductVariation } from 'src/app/shared/interfaces/get-all-product-variation.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly productService :ProductService
  ) {
  }

  public displayedColumns: string[] = ['Descricao', 'Valor'];
  public products: Array<GetAllProductVariation> = [];

  public onClickNavigate(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  public ngOnInit(): void {
    this.productService.getAllProducts(true).subscribe((products) => {
      this.products = products;
    });
  }

}
