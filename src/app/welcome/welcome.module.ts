
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WelcomeRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class AgentModule { }
