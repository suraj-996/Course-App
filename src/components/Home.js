import React, { useEffect } from "react";
import {Container,Button} from "reactstrap";
const Home=() =>{
    useEffect(()=>{
        document.title="Home || Suraj Kumar";
    },[]);
    return (
        
        <div style={{textAlign:"center",backgroundColor:"teal",padding:"30px"}}>
            <h1>Suraj Kumar</h1>
                <p>This is developed by Suraj for learning purpose backedn is on spring boot and frontent on react js</p>
                <Container>
                    <Button color="primary">Start using</Button>
                </Container>
        </div>
    )
}

export default Home;