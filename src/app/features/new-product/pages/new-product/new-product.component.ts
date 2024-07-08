import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  public newProductForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly productService: ProductService,
    private readonly matSnackBar: MatSnackBar,
    private readonly router: Router
  ) {
    this.newProductForm = this.formBuilder.group({
      description: [null, Validators.required],
      buyValue: [null, Validators.required],
      sellValue: [null, Validators.required],
      validity: [null, Validators.required],
      qtd: [null, Validators.required]
    });
  }

  public ngOnInit(): void {
  }


  public onSubmit(): void {
    if (this.newProductForm.valid) {
      const product = new Product({
        Description: this.newProductForm.value.description,
        BuyValue: +this.newProductForm.value.buyValue,
        SellValue: +this.newProductForm.value.sellValue,
        Validity: this.newProductForm.value.validity,
        Qtd: +this.newProductForm.value.qtd
      });
      this.productService.add(product).subscribe(() => {
        this.matSnackBar.open('Seu produto foi cadastrado', 'Ok');
        this.router.navigate(['/landing']);
      });
    }
  }
}
