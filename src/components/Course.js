import React  from "react";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
const Course=({course,update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}`).then(
            (response)=>{
                update(id)
            },
            (error)=>{

            }
        )
    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger ">Delete</Button>
                    <Button color="warning m-2">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;