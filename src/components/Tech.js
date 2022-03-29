import '../css/style.css'
import React from 'react';

export default function Tech(props) {
    return (
        <div className="tech">
            {/* <h1 className="tech-heading">Tech I'm Familiar with </h1> */}

            <div className="tech-stack">

                <img className="tech-icon" src={require(`../images/icons/${props.icon}`)} alt={props.title} />

                <span className="tech-title"> {props.title} </span>

            </div>
        </div>
    )
}