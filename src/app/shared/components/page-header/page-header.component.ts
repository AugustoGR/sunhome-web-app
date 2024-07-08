import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  public routeName: string = '';

  @Input()
  public showHeader: boolean = false;

  public title: string = '';

  private routesTitle: { [key: string]: string } = {
    '/landing': 'Sun Home',
    '/newProduct': 'Cadastro de Produtos',
    '/product': 'Produtos',
    '/revenue': 'Faturamento',
    '/sell': 'Registrar Venda',
  };

  public get getTitle(): string {
    return this.routesTitle[this.routeName] ?? '';
  }

  public ngOnInit(): void {
  }


}
