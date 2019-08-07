import React from 'react';
// import "../styles.css";
import {Navbar,Nav, NavDropdown,FormControl,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
   render() {
      return (
         <div>

            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Link to="/home" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">about</Link>
                  <Link to="/contact" className="nav-link" >contact</Link>
                  <Link to="/Registration" className="nav-link" >Registration</Link>
                  <Link to="/APICall" className="nav-link" >API Call</Link>
                  {/* <Nav.Link href="home">Home</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
               </Nav>
               <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
               </Form>
            </Navbar.Collapse>
            </Navbar>




            <ul>
               {/* <li><a href='home'>Home</a>&nbsp;| &nbsp;</li>
               <li><a href='about'>About Us</a>&nbsp;| &nbsp;</li>
               <li><a href='contact'>Contact Us</a>&nbsp;| &nbsp;</li>
               <li><a href='test/else'>Test</a></li> */}

               {/* <Link to="/home">Home</Link>&nbsp;| &nbsp;
               <Link to="/about">about</Link>&nbsp;| &nbsp;
               <Link to="/contact">contact</Link>&nbsp;| &nbsp; */}
            </ul>
            {/* <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul> */}
            {/* {this.props.children} */}
         </div>
      )
   }
}
export default App;