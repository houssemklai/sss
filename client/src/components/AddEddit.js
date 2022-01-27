import React from 'react';
import {Form ,Button  } from 'react-bootstrap'
function AddEddit() {
  return(
   <div>
 {
  
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="enter you name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="enter your age" />
      </Form.Group>
      <Form.Group >
            <Button>Add</Button>
    </Form.Group>
    </Form>
   }





   </div>
   );
}

export default AddEddit;
