import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Array<Employee>;

  // employeeName: string;
  // employeeLastName: string;
  // employeeNumber: number;
  employee: Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
    this.employeeList = new Array<Employee>();
  }

  onAddEmployee() {
    this.employeeList.push(this.employee);
    this.employee = new Employee();
  }
  onDelete(index: number) {
    this.employeeList.splice(index, 1);
  }
}
