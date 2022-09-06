
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PersonCreateComponent } from './person-create.component';
import { PersonListComponent } from './person-list.component';
import { PersonRoutingModule } from './person-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonCreateComponent,
    PersonListComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PersonRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class PersonModule { }
