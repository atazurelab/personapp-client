import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPerson } from './person';
import { BaseService } from '../shared/base.service';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  private baseUrl = this.baseService.C_APP_URL + '/person';


  constructor(private http: HttpClient, private baseService: BaseService) { }

  create(obj: IPerson): Observable<IPerson> {
    return this.http.post<IPerson>(this.baseUrl, obj, { headers: null })
      .pipe(
        catchError(this.baseService.handleError)
      );
  }


  getAll(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.get<IPerson[]>(url, { headers: null })
      .pipe(
        // tap(data => console.log(JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }




}








