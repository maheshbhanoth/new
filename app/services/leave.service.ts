import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leave } from '../leave'; // Import the Leave interface

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private baseUrl = 'http://localhost:8080/leave'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to apply for leave
  applyForLeave(leaveData: Leave) {
    return this.http.post<Leave>(`${this.baseUrl}`, leaveData);
  }

  // Method to fetch all leaves
  getAllLeaves() {
    return this.http.get<Leave[]>(`${this.baseUrl}`);
  }

  // Method to fetch a specific leave by ID
  getLeaveById(id: number) {
    return this.http.get<Leave>(`${this.baseUrl}/${id}`);
  }

  // Method to update a leave
  updateLeave(id: number, updatedLeave: Leave) {
    return this.http.put<Leave>(`${this.baseUrl}/${id}`, updatedLeave);
  }

  // Method to delete a leave
  deleteLeave(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
