import '../css/style.css'
import React from 'react';

export default function Experience(props) {

    return (
        <div className="experience">

            <div> 
                <h2 className="heading-2"> {props.designation} </h2>
                <a className="heading-3" href="https://engineering.nmims.edu/">
                    <p> { props.company}  </p>
                </a>

            </div>

            <div>
                <p className="timeline"> { props.timeline} </p>
            </div>

            <div className="description">
                <ul>
                    {props.description}

                </ul>
            </div>

            <br/>
        </div>
    )

}