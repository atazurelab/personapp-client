import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonCreateComponent } from './person-create.component';
import { PersonListComponent } from './person-list.component';

const routes: Routes = [
  {

    path: '',
    data: {
      title: 'Persons'
    },
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: PersonListComponent,
        data: {
          title: 'list'
        }
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: PersonCreateComponent,
        data: {
          title: 'Create'
        }
      }
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
export class PersonRoutingModule { }
