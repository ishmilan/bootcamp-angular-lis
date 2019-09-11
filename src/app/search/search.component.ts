import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwnerService } from './services/owner.service';

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

  constructor(private owner: OwnerService) {
    this.query = '';
  }

  ngOnInit() {
    if (this.labelButton === '' || !this.labelButton) {
      this.labelButton = 'Buscar!';
    }
    this.owners = [];
    this.placeholder = this.placeholder ? this.placeholder : '';
    this.getOwners();
  }
  search(event): void {
    event.preventDefault();
    this.result = `Resultado para la búsqueda de "${this.query}".`;
    this.searchEvent.emit({ query: this.query });
    this.owners = this.response.filter(owner => {
      let fields = ['firstName', 'lastName', 'address', 'city'];
      for (let field of fields) {
        return (owner[field].indexOf(this.query) != -1);
      }
    });
  }

  getOwners(): void {
    this.owner.getOwners().subscribe(data => {
      this.response = JSON.parse(data['_body']);
      this.owners = JSON.parse(data['_body']);
    });
  }
}
