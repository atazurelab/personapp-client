import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IPerson } from './person';
import { PersonService } from './person.service';

import { DisplayAlertComponent } from '../shared/display-alert.component';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html'
})
export class PersonCreateComponent implements OnInit {


  isLoading: boolean = false;
  person: IPerson = {} as IPerson;

  @ViewChild(DisplayAlertComponent)
  displayAlert!: DisplayAlertComponent;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private personService: PersonService) {
  }


  editForm = this.fb.group({
    FirstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });


  ngOnInit(): void {

  }

  Save(): void {


    if (!this.editForm.valid) {
      this.displayAlert.showError('One or more value is invalid. Please clear error to continue...');
      return;
    }

    this.isLoading = true;
    this.person = this.editForm.value;

    this.personService.create(this.person).subscribe({
      next: data => {
        this.displayAlert.showSuccess('Details Updated Successfully.')
        this.editForm.reset();
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



