import headShot from '../images/head_shot.jpg'
import '../css/style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function Info() {
    return (
        <div className="info">

            <div className="level-1">
                <div>
                    <img src={headShot} className="profilePhoto" alt="Profile"/>
                </div>
                
                <div>
                    <h2 className="name">Vaibhav Patel</h2>
                    <small className="quote"> Work Hard, let your success make noise. ✌️</small>
                    
                    <h5 className = "designation"> Aspiring Software Engineer </h5>
                    
                    <p className = "user"> <small>vaibhavpatel.codes </small> </p>
                </div>
            </div>

            <div className = "buttons"> 
                <a className = "btn-mail" href="mailto:vaibhavpatel.codes@gmail.com">
                    <FontAwesomeIcon icon = {faEnvelope} > </FontAwesomeIcon>
                    <span>Email</span>
                </a>

                <a className = "btn-link" href = "www.linkedin.com">
                    <FontAwesomeIcon icon = {faLinkedin} > </FontAwesomeIcon>
                    <span>Linkedin</span>
                </a>
            </div>

            <br />

            <div className="about">
                <h2> About </h2>
                <p> Currently Pursuing Btech in CS from
                    MPSTME, NMIMS🎓 located in Mumbai. 
                    A self-motivating, disciplined and hardworking person with 
                    a constant urge to improve myself and learn new things. 
                    Proficient in programming fundamentals like Java, Data Structures, 
                    and Algorithm. I have experience working across Web Development🌐 
                    and Machine Learning and have built few projects by myself. </p>
            </div>
            
            <div className="interests">
                <h2> Interests </h2>
                <p> Food and cooking expert, Travel geek, Vocal Music and Guitar
                    Enthusiast, Football fanatic, Work Hard - Dream Big.
                </p>
            </div>
        </div>
    )
}