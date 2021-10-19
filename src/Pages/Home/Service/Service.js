import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
     const {id, nane, price,durition, img} = service;
    return (
        <div className="service pb-3">
            <img className="bg-cover" src={img} alt=""/>
            <p>Id:  {id}</p>
            <p>Price: ${price}</p>
            <h5>Durition: {durition}</h5>
            <h4>Service: {nane}</h4>
            <Link to={`/booking/${id}`}>
            <Button>Get {nane}</Button>
            </Link>

        </div>
    );
};

export default Service;