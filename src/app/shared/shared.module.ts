
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { DisplayAlertComponent } from '../shared/display-alert.component';

@NgModule({
  declarations: [
    DisplayAlertComponent,
  ],
  exports:
    [
      DisplayAlertComponent
    ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, 
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
