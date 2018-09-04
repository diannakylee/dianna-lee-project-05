import React, {Component} from 'react';
import CategorySearch from './CategorySearch'
import App from '../App'
import firebase from 'firebase';
import Modal from 'react-responsive-modal';
import scrollToComponent from 'react-scroll-to-component';


class DisplayFilm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            savedList: [],
            genreName: "",
            open: false
        }
    }

    saveFilm = (e,film) => {
        e.preventDefault();
        this.props.saveToDatabase(film);
    }
    saveGenre = (prop) => {
        let genre = this.props.genreName
        console.log(`genrename`, genre);
        
        this.setState ({
            genreName: genre
        })
    }
    render() {
        const { open } = this.state;
        return (
            <section id="results" className="displayResults">
                <div className="wrapper">
                    <div>
                        <h2 className="sectionHeading headingDarkBG">You should watch these {this.state.genreName} films...</h2>
                    </div>
                    <div className="filmSection">
                    {this.props.filmList.map((film) => {
                        return (
                            <div className="eachFilm" id={film.id}>
                                <figure className="filmImage">
                                    <img src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`} alt=""/>
                                </figure>
                                <div className="filmInfo">
                                    <h3 className="headingDarkBG">{film.title}</h3>
                                    <div className="filmOptions">
                                        <div>
                                            <p className="filmSynopsis">{film.overview}</p>
                                        </div>
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
