package com.suraj.course.service;

import java.util.List;

import com.suraj.course.model.Course;

public interface CourseService {
	public Course createCourse(Course course);
	public List<Course> courses();
	public Course getCourseById(Integer id);
	public String deleteCourse(Integer id);
	public Course updateCourse(Course course);
}
