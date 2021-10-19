import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../.././/images/notfound.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="mt-4">
            <img className="notfound" src={notfound} alt="" />
            <br/>
            <br/>
            <Link to="/">
             <Button>Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;