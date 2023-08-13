// employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(API_URL);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(API_URL, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
