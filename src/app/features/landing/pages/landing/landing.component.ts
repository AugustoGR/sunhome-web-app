import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {
  }

  public displayedColumns: string[] = ['Descricao', 'Valor'];

  public dataSource = [
    {Descricao: 'Uma descricao bem legal', Valor: 1},
    {Descricao: 'Duas descricoes bem legais', Valor: 2},
    {Descricao: 'Tres descricoes bem legais', Valor: 3},
  ];

  public ngOnInit(): void {
  }


}
