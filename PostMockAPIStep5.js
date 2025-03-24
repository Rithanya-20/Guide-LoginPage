import React, {useState} from 'react';
import {Form, Button, Container, Row, Col, FormSelect} from 'react-bootstrap'
import './Login.css';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const login = async (email, password) => {
    try{
        const response = await axios.post(`${API_URL}/users`,{email, password});
        return response.data;
    }
    catch(error){
        throw error;
    }
};

function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const validateForm = () => {
        const newErrors = {};

        if(!email) newErrors.email = 'Email is required';
        else if(!/\S+@\S+\.+/.test(email)) newErrors.email = 'Email is invalid';

        if(!password) newErrors.password = 'Password is required'
        else if(password.length < 6) newErrors.password = 'Password must have 6 characters'

        return newErrors;
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        setError('')
        if(Object.keys(formErrors).length > 0){
            setError(formErrors)
            console.log(error)
            return;
        }
        else{
            setError({})
            console.log('Login attempted with:', { email, password });

            try{
                const userData = await login(email, password);
                console.log('Login successful: ', userData);
            }catch(error){
                setError({form: 'Login Failed. Please try again'});
            }
        }
        
    }

    return (
       <div className='login-wrapper'>
        <div className='login-form-container'>
           
            <h2 className='login-title'>Login</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group className='login-form' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className='login-form' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' 
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant='primary' type='submit' className='login-button'>Login</Button>

            </Form>
           
        </div>
       </div>

    );
}

export default Login;

