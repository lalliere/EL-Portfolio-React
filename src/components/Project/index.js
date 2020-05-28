import React from "react";
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import "./style.css";

function Project({ image, title, gLink, dLink, description }) {
    return (

        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={ image } alt="Screenshot of Project"></img>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{ title }<i className="material-icons right">more_vert</i></span>
                <p><a href="/">{ gLink }</a></p>
                <p><a href="/">{ dLink }</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{ title }<i className="material-icons right">close</i></span>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default Project;