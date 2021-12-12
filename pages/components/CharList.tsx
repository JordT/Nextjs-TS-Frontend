import React from "react";
import axios from "axios";
import { useState } from "react";

const CharList = () => {
    //usestate
    var state = {
        characterList: []
    }
    
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            const characterList = res.data;
        })
    
    // get the response to display a list of characters to the frontend.
    return (
        state.characterList.map(i
    )
}

// https://www.digitalocean.com/community/tutorials/react-axios-react
