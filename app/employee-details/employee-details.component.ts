// employee-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(): void {
    const id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateEmployee(): void {
    const id = this.route.snapshot.params['id'];
    this.employeeService.updateEmployee(id, this.employee).subscribe(
      () => {
        this.router.navigate(['/employee-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
