import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html'
})
export class PageFooterComponent {

  @Input()
  public initialYear = 2024;

  public currentYear = new Date().getFullYear();

}
