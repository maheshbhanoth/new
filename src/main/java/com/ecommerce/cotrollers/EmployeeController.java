package com.ecommerce.cotrollers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.DTO.EmployeeDTO;
import com.ecommerce.entity.Employee;
import com.ecommerce.repositories.EmployeeRepo;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping("/employee")
    @CrossOrigin("http://localhost:4200") //get the employee by using id
    public ResponseEntity<?> getEmployee(@RequestParam("id") int id) {
        Optional<Employee> employeeOptional = employeeRepo.findById(id);

        if (employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            
            // Create an EmployeeDTO instance and populate it with employee data
            EmployeeDTO employeeDTO = new EmployeeDTO();
            employeeDTO.setId(employee.getId());
            employeeDTO.setName(employee.getName());
            employeeDTO.setMail_id(employee.getMail_id());
            employeeDTO.setRole(employee.getRole());
            employeeDTO.setCategory(employee.getCategory());
            employeeDTO.setGender(employee.getGender());

            return ResponseEntity.ok(employeeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
        }
    }
 }