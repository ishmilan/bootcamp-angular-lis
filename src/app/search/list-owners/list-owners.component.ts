import { Component, OnInit, Input } from '@angular/core';
import { OwnerService } from '../services/owner.service'
import { Owner } from 'shared/models';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit {
  public response: Owner[];
  public owners: Owner[];
  private loaded: boolean = false;
  @Input() set onSearch(query: string) {
    if (this.loaded) {
      this.loadOwners(query);
    }
  }

  constructor(private owner: OwnerService) {
    this.getOwners();
  }

  ngOnInit() {
  }
  getOwners(): void {
    this.owner.getOwners().subscribe(data => {
      this.response = JSON.parse(data['_body']) as Owner[];
      this.loadOwners('');
      this.loaded = true;
    });
  }
  loadOwners(query: string): void {
    if (query && query.length > 0) {
      this.owners = this.response.filter(owner => {
        let fields = ['firstName', 'lastName', 'address', 'city'];
        for (let field of fields) {
        return (owner[field].toLowerCase()
          .indexOf(query.toLowerCase()) > -1);
        }
      });
    } else {
      this.owners = this.response.map(owner=>owner);
    }
  }
}
