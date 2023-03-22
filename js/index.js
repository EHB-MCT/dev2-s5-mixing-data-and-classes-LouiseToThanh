"use strict";

import Jokes from "./Joke";

const app = {

    items: [],

    init() {
        this.getData();
    },

    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10')
        .then(function(jokes){
            return jokes.json();
        })
       
        .then(function(data){
           console.log(data);
        }) 
       
        
    },

    onSearch() {
    },

    render(message) {
    }

}

app.init()