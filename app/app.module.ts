import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveService } from './services/leave.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



@NgModule({
  declarations: [
    AppComponent,
    
    LeaveApplicationComponent,
         LeaveListComponent,
         EmployeeListComponent,
         EmployeeListComponent,
         EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    
    BrowserAnimationsModule
  ],
  providers: [LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
