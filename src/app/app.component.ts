import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
    title = 'angular-advanced-search';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
