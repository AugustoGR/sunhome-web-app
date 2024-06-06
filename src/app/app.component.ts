import { Component, OnInit } from '@angular/core';
//import { environment } from '@env';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    //console.info(`Version: ${environment.appVersion}`);
    console.info(`Version: 1`);
  }
}
