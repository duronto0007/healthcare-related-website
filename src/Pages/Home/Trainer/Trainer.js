import React from 'react';
import './Trainer.css';

const Trainer = ({trainer}) => {
    const {name, division, img} = trainer;
    return (
        <div className="col-lg-4 col-sm-6 col-12 ">
            <div>
            <img src={img} alt=""/>
            <h5>{name}</h5>
            < h4 className="text-danger">Division: {division}</h4>
            </div>
        </div>
    );
};

export default Trainer;