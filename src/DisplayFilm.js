import React, {Component} from 'react';
import CategorySearch from './CategorySearch'
import App from './App'
import firebase from 'firebase';

class DisplayFilm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            savedList: []
        }
    }
    saveFilm = (e,film) => {
        e.preventDefault();
        this.props.saveToDatabase(film);
    }
    render() {
        return (
            <section className="displayResults">
                <h2>You should watch these...</h2>
                {this.props.filmList.map((film) => {
                    return (
                        <div className="eachFilm" id={film.id}>
                            <figure className="filmImage">
                                <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=""/>
                            </figure>
                            <h2 className="filmTitle">{film.title}</h2>
                            <button className="moreInfoButton">More Information</button>
                            {/* <MoreInfo /> */}
                            {/* <p className="filmSynopsis">{film.overview}</p> */}
                            <button onClick={(e) => this.saveFilm(e,film)} id={film.id} className="saveButton">Save for Later</button>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default DisplayFilm;
