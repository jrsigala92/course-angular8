import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {DataService} from '../../../services/data.service';
import { Data } from '@angular/router';
import { ConfirmationService } from 'primeng/api/';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee = new Employee();
  employeeList: Array<Employee>;
  users: Array<any>;
  constructor(
    private dataService: DataService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.onGetEmployees();
  }

  onGetEmployees() {
    // this.employeeList = this.dataService.getEmployees();
    this.dataService.getEmployees().subscribe(res =>
      this.users = res.data);

  }

  onDelete(index: number) {
    this.dataService.deleteEmployee(index);
    this.onGetEmployees();
  }

  confirm(index) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove employee?',
      accept: () => {
        this.onDelete(index);
      }
  });
  }
}
