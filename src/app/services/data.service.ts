import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeList: Array<Employee> = [];
  constructor() { }

  getEmployees() {
    return this.employeeList;
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
