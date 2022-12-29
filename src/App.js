import logo from './logo.svg';
import './App.css';
import { Button, Container,Row,Col} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify'
import Home from "./components/Home"
import Course from './components/Course';
import AllCourse from "./components/AllCourse"
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import {BrowserRouter as Router,Route, Routes,Switch} from "react-router-dom"
const btnHandler= ()=>{
  toast.success("done",{
    position:"top-center"
  })
}
function App() {
  return (
    <div>
     <Router>
      <ToastContainer/>
        <Header></Header>
      
        <Container>
          <Row>
            <Col md={4}>
            <Menus></Menus>
            </Col>
            <Col md={8}>
              <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/add-course' element={< AddCourse />}></Route>
              <Route exact path='/view-courses' element={< AllCourse />}></Route>
              {/* <Route path="/" element={<Home/>} exact></Route> */}
              {/* <Route path='/add-course' component={AddCourse} exact></Route>
              <Route path='/view-courses' component={AllCourse} exact></Route> */}
              </Routes>
              {/* <Home></Home> */}
              
            </Col>
          </Row>
        </Container>
     </Router>
    </div>
  );
}

export default App;
