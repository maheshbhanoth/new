import { Component, OnInit } from '@angular/core';
import { LeaveListService } from '../services/leave-list.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  leaveList: any[] = [];

  constructor(private leaveListService: LeaveListService) {}

  ngOnInit(): void {
    this.fetchLeaveList();
  }

  fetchLeaveList() {
    this.leaveListService.getLeaveList().subscribe(
      (response: any) => {
        this.leaveList = response;
        console.log('Leave List:', this.leaveList); 
      },
      (error: any) => {
        console.error('Error fetching leave list:', error);
      }
    );
  }
  
  
}
