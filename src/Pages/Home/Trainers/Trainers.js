import React from 'react';
import trainer1 from '../../../images/trainer1.jpg'
import trainer2 from '../../../images/trainer2.jpg'
import trainer3 from '../../../images/trainer3.jpg'
import trainer4 from '../../../images/trainer4.jpg'
import trainer5 from '../../../images/trainer5.jpg'
import trainer6 from '../../../images/trainer6.jpg'
import Trainer from '../Trainer/Trainer';

const trainers = [
    {img: trainer1, name:'Adam Smith', division:'Boxing'},
    {img: trainer2, name:'Will Smith', division:'Cardio'},
    {img: trainer3, name:'James Bond', division:'Weight Lifting'},
    {img: trainer4, name:'Jonson will', division:'Self Defense'},
    {img: trainer5, name:'Saimon Petter', division:'Fitness'},
    {img: trainer6, name:'Mikel Philpes', division:'Strength '}
]

const Trainers = () => {
    return (
        <div id="trainers" className="container">
            <h1 className="text-primary">Our Trainers</h1>
            <div className="row">
                {
                    trainers.map(trainer => <Trainer
                    key={trainer.name}
                    trainer={trainer}
                    >

                    </Trainer>)
                }
            </div>
        </div>
    );
};

export default Trainers;