package com.ecommerce.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Employee {
	
	@Id
	@Column(name="employee_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="employee_name")
	private String name;
	
	@Column(name="mail_id")
	private String mail_id;
	
	private String role;
	
	private String category;
	
	private String gender;
	
	@OneToMany(mappedBy="employee",cascade = CascadeType.REMOVE)
	private List<Leaves> LeaveList;

	public Employee() {
		super();
	}
	
	public Employee(String name, String mail_id, String role, String category, String gender) {
		super();
		this.name = name;
		this.mail_id = mail_id;
		this.role = role;
		this.category = category;
		this.gender = gender;
	}
	
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMail_id() {
		return mail_id;
	}

	public void setMail_id(String mail_id) {
		this.mail_id = mail_id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public List<Leaves> getLeaveList() {
		return LeaveList;
	}

	public void setSchedule_work(List<Leaves> schedule_work) {
		LeaveList = schedule_work;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", mail_id=" + mail_id + ", role=" + role + ", category="
				+ category + ", gender=" + gender + "]";
	}
	
	

}