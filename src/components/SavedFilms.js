import React, { Component } from 'react';
import App from '../App';
// import NavBar from './NavBar';

class SavedFilms extends Component {
    constructor (props) {
        super(props);
        this.state = {
            savedList: []
        }
    }
    // this function converts the props passed over from the app and sets it as the state of this component.
    static getDerivedStateFromProps(props){
        console.log(props);
        console.log("received props")
        return {
            savedList: props.savedList           
        }
    }

// render a div for each film
    render () {
        return (
            <section id="saved" className="savedResults">
                <div className="wrapper">
                    <h2 className="sectionHeading">Your Saved Films</h2>
                    <div className="savedFilms">
                    {this.state.savedList.map((film)=>{
                        console.log(`savedlist`, film.film.id);
                            return(
                                <div className="eachFilm--saved">
                                    <figure className="savedFilmImage">
                                        <img src={`http://image.tmdb.org/t/p/w500/${film.film.poster_path}`} alt="" />
                                    </figure>
                                    <div className="savedFilmInfo">
                                        <div className="filmTitle">
                                            <h3>{film.film.title}</h3>
                                        </div>
                                        <div>
                                            <p>{film.film.overview}</p>
                                        </div>
                                        <button class="deleteButton" onClick={() => this.props.deleteFilm(film.key)} id={film.key}><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            )}
                    )
                }
                    </div>
                </div>
            </section>
        )}
    }



export default SavedFilms;