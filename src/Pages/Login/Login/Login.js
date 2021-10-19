import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInusingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={signInusingGoogle}>Google Sign In</Button>
        </div>
    );
};

export default Login;