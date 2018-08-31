import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import CategorySearch from './CategorySearch';
import LandingPage from './functions/LandingPage';
import DisplayFilm from './DisplayFilm';
import firebase from './firebase';
import SavedFilms from './SavedFilms'

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      savedList: []
    }
  }
  componentDidMount(){
    // this is to make sure firebase is connected and it's taking a snapshot of the object
    dbRef.on('value', (snapshot) => {
      this.savedItemsArray((snapshot).val());
    });
  }
  savedItemsArray = (dbObject) => {
    // this takes the firebase object that holds the objects of information and turns it into an array
    const savedFilms = Object.entries(dbObject)
                        .map((item)=> {
                          return ({
                            key: item[0],
                            filmKey: item[1].filmID,
                          });
                        });
    this.setState ({
      savedList: savedFilms
    });  
    console.log("state saved films", this.state.savedList);
    // use length of the saved list to use as a counter for the saved films counter in header
  }
  saveToDatabase = (filmID) => {
    dbRef.push({
      filmID: filmID,
    })
  }
  deleteFilm = (filmKey) => {
    const filmDBRef = firebase.database().ref(`/${filmKey}`);
    filmDBRef.remove();
  }
  addToFilmList = (list) => {
      const newList = Array.from(list);
      this.setState ({
        filmList: newList
      })      
  }
  // deleteFilm = (id) => {
  //   const filmdbRef = firebase.database().ref(`/${id}`);
  //   filmdbRef.remove();
  // }
  render() {
    return (
      <div className="App">
        <LandingPage />
        <CategorySearch addToFilmList={this.addToFilmList}/>
        <DisplayFilm filmList={this.state.filmList} saveToDatabase={this.saveToDatabase}/>
        {/* <MoreInfo /> */}
        <SavedFilms savedList={this.state.savedList} deleteFilm={this.deleteBook}/>
      </div>
    );
  }
}

export default App;
