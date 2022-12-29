package com.suraj.course.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Course {
	@Id
	private Integer id;
	private String title;
	private String description;
}
