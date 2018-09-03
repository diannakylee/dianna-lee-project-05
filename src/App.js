import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import './App.css';
import CategorySearch from './components/CategorySearch';
import LandingPage from './functions/LandingPage';
import DisplayFilm from './components/DisplayFilm';
import SavedFilms from './components/SavedFilms'
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';

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
      savedList: savedFilms
    });  
    console.log("state saved films", this.state.savedList);
    // use length of the saved list to use as a counter for the saved films counter in header
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

  // function to keep count of number of films saved in firebase.
  savedFilmCounter = () => {
    const countFilm = this.state.savedList.length;
    console.log(`count film`, countFilm);
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
      // <Router>
        <div className="App">
          <NavBar />
          {/* <header>
            <h1>Let's be real</h1>
            <Link to="/">Home</Link>
          </header> */}
          <LandingPage />
          {/* <Route exact path="" component={LandingPage} /> */}
          <CategorySearch addToFilmList={this.addToFilmList} />
          {/* <Route exact path="/categories" component={CategorySearch} /> */}
          <DisplayFilm filmList={this.state.filmList} saveToDatabase={this.saveToDatabase} />
          {/* <Route exact path="/results" component={DisplayFilm} /> */}
          <SavedFilms savedList={this.state.savedList} deleteFilm={this.deleteFilm} />
          {/* <Route exact path="/saved" component={SavedFilms} /> */}
        </div>
      // </Router>
    );
  }
}

export default App;


// {/* <LandingPage />
//   <CategorySearch addToFilmList={this.addToFilmList} />
//   <DisplayFilm filmList={this.state.filmList} saveToDatabase={this.saveToDatabase} />
//           {/* <MoreInfo /> */ }
// <SavedFilms savedList={this.state.savedList} deleteFilm={this.deleteFilm} /> */}