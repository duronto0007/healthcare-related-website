import React from 'react';
import trainer5 from '../../../images/trainer5.jpg';
import  './About.css';

const About = () => {
    return (
        <div id="about">
             <h2 className="heading">About Us</h2>
            <div className="about-section">
            
            <div className="py-5">
              <img scr={trainer5} alt="" />
            </div>
            <div className="py-3 px-5">
                <h3>Weight Training</h3>
                <p>From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.</p>
                <h3>General Fitness</h3>
                <p>If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more.</p>

                <h3>Functional Training</h3>
                <p>With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms our functional training room has all the equipment you need to take your training to the next level.</p>
            </div>
        </div>
        </div>
    );
};

export default About;