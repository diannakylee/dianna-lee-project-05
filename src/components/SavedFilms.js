import React, { Component } from 'react';
import App from '../App';
// import NavBar from './NavBar';
import Modal from 'react-responsive-modal';


const styles = {
    textAlign: "center",
};

class SavedFilms extends Component {
    constructor (props) {
        super(props);
        this.state = {
            savedList: [],
            open: false,
            reference: "{(section) => { this.savedResults = section; }}"
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
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
    saveSection = () => {
        let saveRef = this.state.reference
    }
// render a div for each film
    render () {
        const { open } = this.state;
        return (
            <section id="saved" className="savedResults" ref={(section) => { this.savedResults = section; }}>
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
                                        <div className="filmTitleSaved">
                                            <h3>{film.film.title}</h3>
                                        </div>
                                        <div className="modalBox">
                                            <div style={styles}>
                                                <Modal open={open} onClose={this.onCloseModal} center>
                                                    <div className="modalDiv$">
                                                        <p>{film.film.overview}</p>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>
                                        <button onClick={this.onOpenModal} className=" displayButtonTop moreInfoButton"><i class="fas fa-info"></i></button>
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