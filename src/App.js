import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

// Import Components
import CategorySearch from './components/CategorySearch';
import LandingPage from './functions/LandingPage';
import DisplayFilm from './components/DisplayFilm';
import SavedFilms from './components/SavedFilms'
import NavBar from './NavBar';
import Footer from './functions/Footer';

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      savedList: [],
      genreName: "",
      savedFilms: "",
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
    if(dbObject ===  null) {
      dbObject = {}
    }
    const savedFilms = Object.entries(dbObject)
                        .map((item)=> {
                          return ({
                            key: item[0],
                            film: item[1].film,
                          });
                        });
    this.setState ({
      savedList: savedFilms,
      savedFilms: savedFilms.length
    });  
    // use length of the saved list to use as a counter for the saved films counter in header
  }
  categoryName = (value) => {
    const catName = value;
    this.setState ({
      genreName: catName
    });
  }
  // this is a function set up to save films into firebase.  Used to pass down to Display Films.
  saveToDatabase = (film) => {
    dbRef.push({
      film,
    })
  }

  // this is a function set up to delete films into firebase.  Used to pass down to Saved Films.
  deleteFilm = (filmKey) => {
    const filmDBRef = firebase.database().ref(`/${filmKey}`);
    filmDBRef.remove();
  }

  // function passed into category search.
  addToFilmList = (list) => {
      const newList = Array.from(list);
      this.setState ({
        filmList: newList
      })      
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar savedFilms={this.state.savedFilms} reference={this.state.reference}/>
          <div className="siteContent">
            {/* <Route exact path="" component={LandingPage} /> */}
            <CategorySearch addToFilmList={this.addToFilmList} categoryName={this.categoryName}/>
            {/* <Route path="/categories" component={CategorySearch} addToFilmList={this.addToFilmList} /> */}
            <DisplayFilm filmList={this.state.filmList} saveToDatabase={this.saveToDatabase} genreName={this.state.genreName}/>
            {/* <Route path="/results" component={DisplayFilm} filmList={this.state.filmList} saveToDatabase={this.saveToDatabase} /> */}
            <SavedFilms savedList={this.state.savedList} deleteFilm={this.deleteFilm} saveSection={this.saveSection} />
            {/* <Route path="/saved" component={SavedFilms} savedList={this.state.savedList} deleteFilm={this.deleteFilm} /> */}
            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
