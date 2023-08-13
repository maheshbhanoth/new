import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveListService {
  private baseUrl = 'http://localhost:8080/leave'; 

  constructor(private http: HttpClient) {}

  getLeaveList() {
    return this.http.get(`${this.baseUrl}`);
  }
}
