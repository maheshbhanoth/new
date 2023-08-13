package com.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

}