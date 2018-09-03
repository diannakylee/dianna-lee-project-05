import React, {Component} from 'react';
import CategorySearch from './CategorySearch'
import App from '../App'
import firebase from 'firebase';
// import NavBar from './NavBar';

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
                <div className="wrapper">
                    <div>
                        <h2 className="sectionHeading">You should watch these...</h2>
                    </div>
                    <div className="filmSection">
                    {this.props.filmList.map((film) => {
                        return (
                            <div className="eachFilm" id={film.id}>
                                <figure className="filmImage">
                                    <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=""/>
                                </figure>
                                <div className="filmInfo">
                                    <div className="filmTitle">
                                        <h3>{film.title}</h3>
                                    </div>
                                    <div className="filmOptions">
                                        {/* <div>
                                            <p>Release Date:</p>
                                            <p>{film.release_date}</p>
                                        </div> */}
                                        <div>
                                            <button className="displayButton displayButtonTop moreInfoButton"><i class="fas fa-info"></i></button>
                                        </div>
                                        {/* <MoreInfo /> */}
                                        {/* <p className="filmSynopsis">{film.overview}</p> */}
                                        <div>
                                            <button onClick={(e) => this.saveFilm(e, film)} id={film.id} className=" displayButton displayButtonBottom saveButton"><i class="far fa-save"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </section>
        )
    }
}

export default DisplayFilm;
