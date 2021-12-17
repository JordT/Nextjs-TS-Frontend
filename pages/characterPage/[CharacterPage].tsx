import { useRouter } from "next/router";
import Image from 'next/image'
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterPage = () => {
  const router = useRouter()
  const characterToRetrieve = router.query.CharacterPage

  const [characterInfo, setCharacterInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${characterToRetrieve}`)
    .then(res => {
      setCharacterInfo(res.data)
      setLoading(false)
    })
  }, [])
  
  console.log(characterInfo.image)
  // https://rickandmortyapi.com/api/character/avatar/3.jpeg
  return (
    <div>
      <p>This is a character page for character number: {router.query.CharacterPage}</p>
      <p>{characterInfo.name}</p>
      <p>{characterInfo.status}</p>
      <p>{characterInfo.species}</p>
      <p>{characterInfo.Gender}</p>
      {/* <p>{characterInfo.origin.name}</p> */}
      <p>Number of episodes:</p>
      { loading ? <p>Loading</p> : <Image src={characterInfo.image} height='300' width='300' />}
      
      {/* <Image src={characterInfo.image}/>
      Last Known Location
      Image
      Number of episodes appearances */}
      
    </div>
  )
}

export default CharacterPage

// nextjs guide
// https://nextjs.org/docs/routing/dynamic-routes

/// neeed to work out how to get URL data from hereeeeee....


///
