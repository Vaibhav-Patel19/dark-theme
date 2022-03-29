import '../css/style.css'
import React from 'react';

export default function Project(props) {

    return (
        <div className="project">
            <br />
            
            <div> 
                <h2 className="heading-2"> {props.title} </h2>
                
                <p className = "heading-3"> { props.tech }  </p>
            </div>

            <div>
                <img className="project-icon" src={require(`../images/icons/${props.img}`)} alt={props.title} />
            </div>

            <div className="description">
                <ul>
                    {props.description}
                </ul>
            </div>


        </div>
    )
}