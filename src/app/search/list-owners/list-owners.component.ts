import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OwnerService } from '../services/owner.service'
import { Owner } from '../models/owner.interface';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit, OnChanges {
  public response: Owner[];
  public owners: Owner[];
  private loaded: boolean = false;
  @Input() query: string;

  constructor(private owner: OwnerService) {
    this.getOwners();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    if(this.loaded) {
      this.onSearch();
    }
    console.log(this.query);
  }
  getOwners(): void {
    this.owner.getOwners().subscribe(data => {
      this.response = JSON.parse(data['_body']) as Owner[];
      this.onSearch();
      this.loaded = true;
    });
  }
  onSearch(): void {
    if (this.query && this.query.length > 0) {
      this.owners = this.response.filter(owner => {
        let fields = ['firstName', 'lastName', 'address', 'city'];
        for (let field of fields) {
          return (owner[field].indexOf(this.query) != -1);
        }
      });
    } else {
      this.owners = this.response.map(owner=>owner);
    }
  }
}
