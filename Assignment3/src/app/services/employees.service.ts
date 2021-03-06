import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private _http : HttpClient) { }

  getEmployeeData() {
    return this._http.get<any>("http://dummy.restapiexample.com/api/v1/employees");
  }

}
