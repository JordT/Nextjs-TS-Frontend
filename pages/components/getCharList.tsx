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
            // console.log(res.data.results)
            const this.characterList = res.data;
            console.log(state.characterList)
        })
    
    
    // get the response to display a list of characters to the frontend.
    return <p>{state.characterList}</p>
    // (
    //     {state.characterList.map((c) => {
    //       <p>{state.characterList[c]}</p>
    //     }
    // )})
}

export default CharList;
// https://www.digitalocean.com/community/tutorials/react-axios-react
