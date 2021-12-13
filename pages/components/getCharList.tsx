import axios from "axios";
import { useState } from "react";

const getCharList = () => {

    const [characterList, setCharacterList] = useState([])
        
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            // console.log(res.data.results)
            setCharacterList(res.data)
            // const this.characterList = res.data;
            console.log(characterList)
        })
    
    return characterList

}

export default getCharList;
// https://www.digitalocean.com/community/tutorials/react-axios-react
