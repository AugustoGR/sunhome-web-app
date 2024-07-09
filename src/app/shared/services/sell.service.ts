import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Sale } from '../models/sale.model';
import { Observable } from 'rxjs';
import { SaleInfo } from '../interfaces/sale-info.interface';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private readonly apiService: ApiService) { }

  public getAll(): Observable<Array<SaleInfo>> {
    return this.apiService.get('sales');
  }

  public newSale(sale: Sale): Observable<void> {
    return this.apiService.post('sales', sale);
  }
}