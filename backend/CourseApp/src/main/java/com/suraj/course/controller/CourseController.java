package com.suraj.course.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.suraj.course.model.Course;
import com.suraj.course.service.CourseService;

@RestController
@CrossOrigin
public class CourseController {
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/courses")
	public List<Course> courses(){
		return courseService.courses();
	}
	@GetMapping("course/{id}")
	@CrossOrigin
	public Course getCourseById(@PathVariable Integer id) {
		return courseService.getCourseById(id);
	}
	@DeleteMapping("course/{id}")
	@CrossOrigin
	public String deleteCourse(@PathVariable Integer id) {
		return courseService.deleteCourse(id);
	}
	@PutMapping("course/")
	@CrossOrigin
	public Course updateCourse(@RequestBody Course course) {
		return courseService.updateCourse(course);
	}
	@PostMapping("course/")
	@CrossOrigin
	public Course createCourse(Course course) {
		return courseService.createCourse(course);
	}
}
