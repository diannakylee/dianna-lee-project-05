import React from 'react';

const Modal = (props) => {
    return (
        <div className="overlay">
            <div className="modalBox">
                <figure>
                    <img src="" alt=""/>
                </figure>
                <div className="modalInfo">
                    <h3>title</h3>
                    <p>overview</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;