import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Search = props =>{
return (
    <>
    <Navbar className="container-sm mb-3 mx-auto rounded" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="w-100 mx-auto">
            <img
              alt=""
              src="./weather_app.svg"
              width="100%"
              height="30px"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
        </Container>
    </Navbar>
    <Form.Floating className="container-sm mb-3 mx-auto">
        <Form.Control
          type="text"
          value={props.value}
          onChange={props.change}
        />
        <label className="ms-2">City:</label>
    </Form.Floating>
    </>
)
}

export default Search