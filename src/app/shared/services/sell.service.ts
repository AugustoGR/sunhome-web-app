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

  public getCurrentMonth(): string {
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const date = new Date();
    return monthNames[date.getMonth()];
  }

  public isCurrentMonth(date: Date): boolean {
    const currentDate = new Date();
    const saleDate = new Date(date);
    return saleDate.getMonth() === currentDate.getMonth() && saleDate.getFullYear() === currentDate.getFullYear();
  }

  public getRevenueAndProfit(salesInfo: Array<SaleInfo>): Array<string> {
    let totalRevenue = 0;
    let totalProfit = 0;

    salesInfo.forEach((saleInfo) => {
      if (this.isCurrentMonth(saleInfo.createdAt)) {
        saleInfo.SaleProductVariation.forEach((variation) => {
          const unitPrice = parseFloat(variation.unitPrice);
          const buyValue = parseFloat(variation.ProductVariation.buyValue);
          const quantity = variation.quantity;
  
          totalRevenue += unitPrice * quantity;
          totalProfit += (unitPrice - buyValue) * quantity;
        });
      }
    });

    const revenue = `R$ ${totalRevenue.toFixed(2)}`;
    const profit = `R$ ${totalProfit.toFixed(2)}`;
    return [revenue, profit];
  }

  public getAll(): Observable<Array<SaleInfo>> {
    return this.apiService.get('sales');
  }

  public newSale(sale: Sale): Observable<void> {
    return this.apiService.post('sales', sale);
  }
}