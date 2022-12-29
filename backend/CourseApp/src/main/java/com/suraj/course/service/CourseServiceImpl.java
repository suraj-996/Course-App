package com.suraj.course.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suraj.course.model.Course;
import com.suraj.course.repo.CourseRepo;

@Service
public class CourseServiceImpl implements CourseService{

	@Autowired
	private CourseRepo courseRepo;
	@Override
	public List<Course> courses() {
		List<Course> courses=courseRepo.findAll();
		return courses;
	}

	@Override
	public Course getCourseById(Integer id) {
		Course course=courseRepo.findById(id).get();
		return course;
	}

	@Override
	public String deleteCourse(Integer id) {
		Course course=courseRepo.findById(id).get();
		courseRepo.delete(course);
		return "Course Deleted Successully";
	}

	@Override
	public Course updateCourse(Course course) {
		Course updatedCourse=courseRepo.findById(course.getId()).get();
		updatedCourse.setDescription(course.getDescription());
		updatedCourse.setTitle(course.getTitle());
		return updatedCourse;
		
	}

	@Override
	public Course createCourse(Course course) {
		Course c=courseRepo.save(course);
		return c;
	}

}
