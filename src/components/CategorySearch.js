import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import App from "../App";
import scrollToComponent from 'react-scroll-to-component';

const apiKey = "9730d75dc08b7e8263acc831c38a0095";
const url = "https://api.themoviedb.org/3/discover/movie/";


class CategorySearch extends Component {
    constructor (){
        super();
        this.state = {
            categoryChoice: "",
            categoryGenre: "",
            filmList: []
        }
    }
    updateUserChoice = (e) => {
        e.preventDefault();
        let chosenCategory = e.target.id;
        let chosenGenre = e.target.value;
        console.log(`what is this`, e.target.id);
        scrollToComponent(this.Next, { offset: 0, align: 'top', duration: 500, ease: 'inCirc' });
        
        this.setState({
            categoryChoice: chosenCategory,
            categoryGenre: chosenCategory
        }, () => {
            this.searchFilms();
        });        
    }
        // CORS error popped up, and put in add-on, ask tomorrow
        // this could just be a function in another file 
    searchFilms = (categoryChoice) => {
        axios({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: url,
                params: {
                    api_key: apiKey,
                    dataResponse: 'json',
                    with_genres: '99',
                    with_keywords: this.state.categoryChoice
                },
            }
        }).then((res) => {
            this.finalFilmList(res.data.results);
        })
    }

    
    // Create a separate array with 6 films
    finalFilmList = (array) => {
        const filmResults = Array.from(array);
        const eightFilms = filmResults.slice(0,8);
        this.setState ({
            filmList: eightFilms
        })     
        this.props.addToFilmList(this.state.filmList);
    }
    render() {
        return (
            <section id="categories" className="categories">
                <div className="wrapper cat">
                    <div>
                        <h2 className="sectionHeading">Pick a Category</h2>
                    </div>
                    <div className="buttonSection">
                        <button className="categoryButton cat--Sport" onClick={this.updateUserChoice} id="6075" value="Sports">sport
                        </button>
                        
                        <button className="categoryButton cat--Nature" onClick={this.updateUserChoice} id="18330" value="Nature">Nature</button>
                        <button className="categoryButton cat--Culture" onClick={this.updateUserChoice} id="162710" value="Culture">Culture</button>
                        <button className="categoryButton cat--Music"onClick={this.updateUserChoice} id="6027" value="Music">Music</button>
                        <button className="categoryButton cat--War"onClick={this.updateUserChoice} id="6091" value="War">War</button>
                        <button className="categoryButton cat--Justice" onClick={this.updateUserChoice} id="15108" value="Social Justice">Social Justice</button>
                        <button className="categoryButton categoryButton__last cat--Art" onClick={this.updateUserChoice} id="14893" value="Art">Art</button>
                        <button className="categoryButton categoryButton__last cat--Architecture" onClick={this.updateUserChoice} id="12436" value="biography">Architecture</button>
                    </div>
                </div>
                <section className='Next' ref={(section) => { this.Next = section; }}></section>
            </section>
        )
    }
}

export default CategorySearch;

// the user choice is supposed to be passed to the axios query as a prop...is that correct?

// how