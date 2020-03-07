import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeList: Array<Employee> = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users');
    // return this.employeeList;
  }

  getEmployee(index: string) {
    return this.employeeList[index];
  }
  setEmployee(employee: Employee) {
    if (!this.employeeList) {
      this.employeeList = [];
    }
    this.employeeList.push(employee);
  }

  updateEmployee(index, employee: Employee) {
    this.employeeList[index] = employee;
  }

  deleteEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }
}
