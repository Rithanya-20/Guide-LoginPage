import React, {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login attempted with: ',{email, password});
    }

    return (
       <Container>
        <Row className='justify-content-md-center mt-5'>
            <Col xs={12} md={6}>
            <h2 className='text-center mb-4'>Login</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' 
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant='primary' type='submit' className='w-100'>Login</Button>
            
            </Form>
            </Col>
        </Row>
       </Container>

    );
}

export default Login;

