import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IPerson } from './person';
import { PersonService } from './person.service';

import { DisplayAlertComponent } from '../shared/display-alert.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {


  isLoading: boolean = false;
  persons: IPerson[];

  @ViewChild(DisplayAlertComponent)
  displayAlert!: DisplayAlertComponent;

  constructor(
    private router: Router,
    private personService: PersonService) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.LoadUI();
    }, 500);
  }


  LoadUI(): void {
    this.isLoading = true;
    this.personService.getAll().subscribe({
      next: data => {
        this.persons = data;
      },
      error: err => {
        this.displayAlert.showError(err); this.isLoading = false;
      },
      complete: () => { this.isLoading = false; }
    });
  }



  GoBack(): void {
    this.router.navigate(['/']);
  }

}



