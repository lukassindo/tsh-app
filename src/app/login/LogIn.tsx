import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import login from '../../img/login.png'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {

    return (
        <Container fluid className="p-0 overflow-hidden login">
            <Row>
                <Col md={5} className="p-0 d-none d-md-block">
                    <div className="img_container vh-100">
                        <Image src={login}/>
                    </div>
                </Col>
                <Col md={7}  className="login_page vh-100 p-0 d-sm-flex justify-content-center align-items-center">
                    
                    <div className="form_container">
                        <div className="logo position-absolute">
                            <Link to="/"  className="text-dark">join.tsh.io</Link>
                        </div>
                        <h1 className="mb-4">Login</h1>
                        <Form className="login_form">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Link to={{
                                    pathname: "/",
                                    state: false
                                }} 
                                className="w-100 mt-4 blue_link btn btn-primary">
                                Log In
                            </Link>
                            <a href="" onClick={(e) => {e.preventDefault()}} className="forget d-block pt-2">Forgot password?</a>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default LogIn;