import React, { Component } from 'react';





class Modal extends Component {
    render () {
        return(
            <div className="wrapper">
                <h2>{film.title}</h2>
                <div>
                    <p>{film.overview}</p>
                </div>
            </div>
        )
    }

}