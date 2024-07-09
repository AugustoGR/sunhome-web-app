import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { AddProduct } from '../interfaces/add-product.interface';
import { AddProductResponse } from '../interfaces/add-product-response.interface';
import { GetAllProductVariation } from '../interfaces/get-all-product-variation.interface';
import { GetProductStock } from '../interfaces/get-product-stock.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly apiService: ApiService) { }

  private addStock(productVariationId: string, qtd: number, buyValuePerUnit: number): Observable<void> {
    const body = {
      id: productVariationId,
      quantity: qtd,
      buyValuePerUnit
    };

    return this.apiService.post('product-variation/add-stock', body);
  }

  public getProductVariations(id: string): Observable<GetProductStock> {
    return this.apiService.get(`product/${id}/variations`);
  }

  public getAllProducts(orderByDate: boolean = true): Observable<Array<GetAllProductVariation>> {
    return this.apiService.get<Array<GetAllProductVariation>>('product-variation').pipe(
      map((products) => products.sort((prodA, prodB) => {
        if (orderByDate) {
          return Date.parse(prodA.validUntil) - Date.parse(prodB.validUntil)
        }
        return Date.parse(prodB.validUntil) - Date.parse(prodA.validUntil)
      }))
    )
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
      switchMap((response: GetProductStock) => {
        return this.addStock(response.id, product.Qtd!, product.BuyValue!)
      })
    );
  }

}