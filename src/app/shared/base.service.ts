import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  throwError } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})

export class BaseService { 
 
  public  C_APP_URL : string = "https://localhost:44343/api" ;

  constructor( ) {

   }
  
  

  public handleError(err: HttpErrorResponse)  {     
    let errorMessage = '';
   
    console.log(err);
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    }  
    
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (err.error != null && err.error.detail != null) {
        errorMessage = err.error.detail;
      }
      else if (err.error != null && err.error.title != null) {
        errorMessage = err.error.title;
      }
      else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
   
      }
     
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }



  

  
}
