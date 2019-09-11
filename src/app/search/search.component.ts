import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwnerService } from './services/owner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public query: string;
  public result: string;

  @Input() labelButton: string;
  @Input() placeholder: string;
  @Output() searchEvent = new EventEmitter();

  constructor(private owner: OwnerService) {
    this.query = '';
    this.owner.getOwners().subscribe(data => { // Ejemplo de llamada al servicio
      // this.results = data;
      console.log(data);
    });
  }

  ngOnInit() {
    if (this.labelButton === '' || !this.labelButton) {
      this.labelButton = 'Buscar!';
    }
    this.placeholder = this.placeholder ? this.placeholder : '';
  }
  search(event) {
    event.preventDefault();
    this.result = `Resultado para la búsqueda de "${this.query}".`;
    this.searchEvent.emit({ query: this.query });

  }
}
