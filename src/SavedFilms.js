import React, { Component } from 'react';
import CategorySearch from './CategorySearch';
import firebase from 'firebase';
import App from './App';

class SavedFilms extends Component {
    constructor () {
        super();
        this.state = {
            savedList:[]
        }
    }
    sortSavedList = (prop) => {
        console.log(`prop`, prop);
        
    }
    render () {
        return (
            <div>
                <h2>Your Saved Films</h2>
            </div>
        )
    }
}

export default SavedFilms;