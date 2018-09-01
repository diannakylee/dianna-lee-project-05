import React, { Component } from 'react';
import App from './App';

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
            this.state.savedList.map((film)=>{
                console.log(`savedlist`, film.film.id);
                    return(
                        <section>
                            <h2>Your Saved Films</h2>
                            <div>
                                <figure className="savedImage">
                                    <img src={`http://image.tmdb.org/t/p/w500/${film.film.poster_path}`} alt="" />
                                </figure>
                                <h3>{film.film.title}</h3>
                                <p>{film.film.overview}</p>s
                                <button onClick={() => this.props.deleteFilm(film.key)} id={film.key}>Delete</button>
                            </div>
                        </section>
                    )
                })
            )      
    }
}




export default SavedFilms;