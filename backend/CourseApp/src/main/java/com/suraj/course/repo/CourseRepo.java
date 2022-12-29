package com.suraj.course.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.suraj.course.model.Course;

@Repository
public interface CourseRepo extends JpaRepository<Course, Integer>{

}
