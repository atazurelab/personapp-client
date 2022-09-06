import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },

    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
