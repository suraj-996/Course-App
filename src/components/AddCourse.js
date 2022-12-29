import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {Button, Container, Form, FormGroup,Input } from "reactstrap";
import base_url from "../api/bootapi"
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add courses";
    },[]);

    const [course,setCourse] =useState({})
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }
    //creating function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/course`,data).then(
            (response)=>{
                console.log(response);
                console.log("success")
            },
            (error)=>{
                console.log(error);
            }
        )
    }
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="courseId">Course Id</label>
                    <Input type="text"placeholder="Enter here" name="userId" id="userId" 
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}></Input>

                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text"placeholder="Enter title here" name="title" id="title"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}></Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea"placeholder="Enter Description here" name="description" id="description" style={{height:150}}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}></Input>
                </FormGroup>
                <Container className="text-center my-3">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset"  color="warning m-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;