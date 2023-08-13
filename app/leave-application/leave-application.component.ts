import { Leave } from './../leave';
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {
  leave = { 
    employee_id: '',
    leaveType:'',
    startDate: '',
    endDate: '',
    reason: ''
  };



  leaveList: any[] = [];
  isEditMode = false;

  constructor(
    private leaveService: LeaveService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLeaveList();
  }
   
  data:any;
  submitLeaveApplication() {
    console.log(this.leave);
    
    this.data = {
      leaveType: this.leave.leaveType,
      startDate: this.leave.startDate,
      endDate: this.leave.endDate,
      reason: this.leave.reason,
      employee: {
          id:parseInt( this.leave.employee_id)
      }
    };
    
    console.log(this.data);
    this.leaveService.applyForLeave(this.data).subscribe((res)=>{
      this.loadLeaveList()
      alert("added")

    },
    (error) => {
      this.loadLeaveList();
    }
    )
  
  }
 
  loadLeaveList() {
    this.leaveService.getAllLeaves().subscribe(
      (data: any[]) => {
        this.leaveList = data;
      },
      (error) => {
        console.log('Error fetching leave list:', error);
      }
    );
  }
  
  updateLeave() {
    console.log(this.leave);
  
    this.data = {
      leaveType: this.leave.leaveType,
      startDate: this.leave.startDate,
      endDate: this.leave.endDate,
      reason: this.leave.reason,
      employee: {
        id: parseInt(this.leave.employee_id)
      }
    };
  
    console.log(this.data);
    this.leaveService.updateLeave(this.id, this.data).subscribe(
      (res) => {
        this.snackBar.open('Leave application updated successfully!', 'Close', {
          duration: 3000,
        });
        this.loadLeaveList();
        this.cancelUpdate();
      },
      (error) => {
        this.snackBar.open('An error occurred while updating the leave application.', 'Close', {
          duration: 3000,
        });
        this.loadLeaveList();
      }
    );
  }
  

  deleteLeave(id: number) {
    this.leaveService.deleteLeave(id).subscribe(
      (response) => {
        this.snackBar.open('Leave application deleted successfully!', 'Close', {
          duration: 3000,
        });
        this.loadLeaveList();
      },
      (error) => {
        this.snackBar.open('An error occurred while deleting the leave application.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  id:any;

  editdetails:any;

  editLeave(leaveItem: any) {
    this.leave = { ...leaveItem };
    this.editdetails = {...leaveItem}
    this.id =  this.editdetails.id
    console.log(this.id)
    console.log(this.leave)
    this.isEditMode = true;
  }

  cancelUpdate() {
    this.isEditMode = false;
    this.leave = {  employee_id: '', leaveType: '',  startDate: '', endDate: '', reason: '' };
  }

}



