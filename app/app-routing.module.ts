import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveApplicationComponent } from './leave-application/leave-application.component'; // Adjust the path as needed
import { LeaveListComponent } from './leave-list/leave-list.component'; // Import the LeaveListComponent
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/leave-application', pathMatch: 'full' }, // Redirect to leave application by default
  { path: 'leave-application', component: LeaveApplicationComponent },
  { path: 'leave-list', component: LeaveListComponent },
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  
  // Add more routes for other components/views here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
