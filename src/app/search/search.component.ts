import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() {
    this.query = '';
    this.labelButton = this.labelButton ? this.labelButton : 'Pesquisar';
    this.placeholder = this.placeholder ? this.placeholder : '';
  }

  ngOnInit() {
  }
  search(event) {
    event.preventDefault();
    this.result = `Consulta feita com a consulta "${this.query}".`;
    this.searchEvent.emit({ query: this.query });

  }
}
