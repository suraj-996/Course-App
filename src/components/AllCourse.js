import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";

const Allcourse=()=>{
    useEffect(()=>{
        document.title="All courses";
    },[]);

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log("success");
                setCourses(response.data);
            },
            (error)=>{
                //error
                console.log(error);
               
            }
        )
    }

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }
    useEffect(()=>{
        getAllCoursesFromServer();
    },[])
    const [courses,setCourses]=useState ([])

    return (
        <div>
            
            <h1 >All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}></Course>) : "No courses"
            }
        </div>
    )
}

export default Allcourse;