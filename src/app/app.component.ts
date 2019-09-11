import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  query: string;
  constructor() {

  }
  search(event): void {
    this.query = event.query;
  }
}
