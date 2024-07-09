import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService } from '../../services/credential.service';

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

  constructor(
    private readonly router: Router,
    private readonly credentialService: CredentialService
  ) { }

  private routesTitle: { [key: string]: string } = {
    '/landing': 'Sun Home',
    '/newProduct': 'Cadastro de Produtos',
    '/product': 'Produtos',
    '/revenue': 'Faturamento',
    '/sell': 'Registrar Venda',
  };

  public logout():void{
    this.credentialService.logout();
    this.router.navigate(['/login']);
  }

  public get getTitle(): string {
    return this.routesTitle[this.routeName] ?? '';
  }

  public ngOnInit(): void {
  }


}
