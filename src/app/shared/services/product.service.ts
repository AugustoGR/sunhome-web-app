import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, switchMap, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { AddProduct } from '../interfaces/add-product.interface';
import { AddProductResponse } from '../interfaces/add-product-response.interface';
import { GetProductVariations } from '../interfaces/get-product-variations.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly apiService: ApiService) { }

  private getProductVariations(id: string): Observable<GetProductVariations> {
    return this.apiService.get(`product/${id}/variations`);
  }

  private addStock(productVariationId: string, qtd: number, buyValuePerUnit: number): Observable<void> {
    const body = {
      id: productVariationId,
      quantity: qtd,
      buyValuePerUnit
    };

    return this.apiService.post('product-variation/add-stock', body);
  }

  public add(product: Product): Observable<any> {

    const body: AddProduct = {
      description: product.Description!,
      price: product.SellValue!,
      variations: []
    };

    body.variations.push({
      description: product.Description!,
      validUntil: product.Validity!,
      buyValuePerUnit: product.BuyValue!,
      pricePerUnit: product.SellValue!
    });

    return this.apiService.post<AddProductResponse>('product', body).pipe(
      switchMap((response: AddProductResponse) => {
        return this.getProductVariations(response.id)
      }),
      switchMap((response: GetProductVariations) => {
        return this.addStock(response.id, product.Qtd!, product.BuyValue!)
      })
    );
  }

}