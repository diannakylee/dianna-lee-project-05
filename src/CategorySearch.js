import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import App from "./App";

const apiKey = "9730d75dc08b7e8263acc831c38a0095";
const url = "https://api.themoviedb.org/3/discover/movie/";

class CategorySearch extends Component {
    constructor (){
        super();
        this.state = {
            categoryChoice: "",
            filmList: []
        }
    }
    updateUserChoice = (e) => {
        e.preventDefault();
        let chosenCategory = e.target.id;
        this.setState({
            categoryChoice: chosenCategory
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
        const sixFilms = filmResults.slice(0,6);
        this.setState ({
            filmList: sixFilms
        })     
        this.props.addToFilmList(this.state.filmList);
    }
    render() {
        return (
            <section>
                <h2>Pick a Category</h2>
                <div>
                    <figure>
                        <img src="" alt=""/>
                    </figure>
                    <button onClick={this.updateUserChoice} id="6075" value="Sports">Sports</button>
                </div>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <button onClick={this.updateUserChoice} id="18330" value="Nature">Nature</button>
                </div>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <button onClick={this.updateUserChoice} id="162710" value="Culture">Culture</button>
                </div>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <button onClick={this.updateUserChoice} id="6027" value="Music">Music</button>
                </div>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <button onClick={this.updateUserChoice} id="6091" value="War">War</button>
                </div>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <button onClick={this.updateUserChoice} id="15108" value="Social Justice">Social Justice</button>
                </div>
            </section>
        )
    }
}

export default CategorySearch;

// the user choice is supposed to be passed to the axios query as a prop...is that correct?

// how