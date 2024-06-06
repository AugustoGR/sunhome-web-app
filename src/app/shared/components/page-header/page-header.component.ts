import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  public routeName: string = '';

  public title: string = '';

  private routesTitle: { [key: string]: string } = {
    '/landing': 'Sun Home'
  };
  
  public ngOnInit(): void {
    this.title = this.routesTitle[this.routeName] ?? '';
  }


}
