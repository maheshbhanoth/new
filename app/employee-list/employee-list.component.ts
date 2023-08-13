import { EmployeeService } from './../employee.service';
import { LeaveService } from './../services/leave.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService,private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.LeaveService();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  LeaveService(): void  {
    this.leaveService.getAllLeaves().subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }
}