import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public showHeader = false;
  public currentUrl = '';

  constructor(
    private router: Router, private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentUrl = this.router.url;
      if (this.currentUrl !== '/login') {
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    });

  }

}
