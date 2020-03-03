import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { DataService } from 'src/app/services/data.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  employeeId: string;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.employeeId = this.route.snapshot.paramMap.get('index');
    if (this.employeeId) {
      console.log(this.employeeId);
      this.employee = this.dataService.getEmployee(this.employeeId);
    }
  }

  onAddEmployee() {
    console.log('add employee', this.employee);
    this.dataService.setEmployee(this.employee);
    this.employee = new Employee();
    this.router.navigateByUrl('employees/employee-list');
  }

  onSaveEmployee() {
    this.dataService.updateEmployee(this.employeeId, this.employee);
    this.employee = new Employee();
    this.router.navigateByUrl('employees/employee-list');
  }
}
