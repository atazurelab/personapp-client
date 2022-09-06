import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-person-create',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {


  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }


  ngOnInit(): void {

  }

  PersonList(): void {
    this.router.navigate(['persons/list']);
  }

  CreatePerson(): void {
    this.router.navigate(['persons/create']);
  }

}



