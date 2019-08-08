import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function HelloBootstrap() {
  return (

<div className="container">
<Navbar bg="dark" variant="dark">
<Navbar sticky="top" />
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  

</div>
  )}
      
  //   <div className="container">
  //     <div className="jumbotron">
  //       <h1>Hello, world!</h1>
  //       <p>I'm a jumbotron!</p>
  //    <p>
  //         <button className="btn btn-primary btn-lg">Learn more</button>
  //       </p>
  //     </div>
  //     <div className="card mb-4">
  //       <div className="card-header">
  //         <h3>Card title</h3>
  //       </div>
  //       <div className="card-body">
  //         <p className="card-text">Card content</p>
  //       </div>
  //     </div>
  //     <div className="card mb-4">
  //       <div className="card-header">
  //         <h3>Card title</h3>
  //       </div>
  //       <div className="card-body">
  //         <p className="card-text">Card content</p>
  //       </div>
  //     </div>
  //   </div>
  // );


export default HelloBootstrap;
