package com.ecommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entity.Leaves;

@Repository
public interface LeavesRespository extends JpaRepository<Leaves, Integer>{
	List<Leaves> findAllByEmployeeId(int employeeId);
}