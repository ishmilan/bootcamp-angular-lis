import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { OwnerService } from './services/owner.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [SearchComponent, ListOwnersComponent],
  providers: [OwnerService],
  exports: [SearchComponent, ListOwnersComponent]
})
export class SearchModule { }
