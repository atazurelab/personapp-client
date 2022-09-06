import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-alert',
  templateUrl: './display-alert.component.html',
  styleUrls: ['./display-alert.component.css']
})
export class DisplayAlertComponent implements OnInit {

  constructor() { }

  _alertType: string;
  _IsVisiible: boolean;
  msg: string;

  get alertType(): string {
    return this._alertType;
  }
  set alertType(value: string) {
    this._alertType = value;
  }

  get IsVisiible(): boolean {
    return this._IsVisiible;
  }

  set IsVisiible(value: boolean) {
    this._IsVisiible = value;
  }


  ngOnInit(): void {

  }


  clearError(): void {
    this.alertType = '';

  }


  showError(strmsg: string): void {
    this.alertType = 'Warning'
    this.msg = strmsg;
    this.IsVisiible = true;
  }


  showSuccess(strmsg: string): void {
    this.alertType = 'Success'
    this.msg = strmsg;
    this.IsVisiible = true;
  }

  CloseAlert(): void {
    this.IsVisiible = false;
  }



}
