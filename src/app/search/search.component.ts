import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  telephone: string;
  pets : any[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public query: string;
  public result: string;
  public response: Owner[];
  public owners: Owner[];

  @Input() labelButton: string;
  @Input() placeholder: string;
  @Output() searchEvent = new EventEmitter();

  constructor() {
    this.query = '';
  }

  ngOnInit() {
    if (this.labelButton === '' || !this.labelButton) {
      this.labelButton = 'Buscar!';
    }
    this.owners = [];
    this.placeholder = this.placeholder ? this.placeholder : '';
  }
  search(event): void {
    event.preventDefault();
    this.result = `Resultado para la búsqueda de "${this.query}".`;
    this.searchEvent.emit({ query: this.query });
  }

}
