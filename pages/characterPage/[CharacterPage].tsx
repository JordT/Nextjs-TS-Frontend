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
      <p>Include naviation for next page or previous page??</p>
      <p>Name: {characterInfo.name}</p>
      <p>Status: {characterInfo.status}</p>
      <p>Species: {characterInfo.species}</p>
      <p>Gender: {characterInfo.gender}</p>
      { loading ? <p></p> : <p>Origin: {characterInfo.origin.name}</p>}
      { loading ? <p></p> : <p>Last know location: {characterInfo.location.name}</p>}
      { loading ? <p></p> : <p>Number of appearances: {characterInfo.episode.length}</p>}
      { loading ? <p></p> : <Image src={characterInfo.image} height='300' width='300' />}
    </div>
  )
}

export default CharacterPage

// nextjs guide
// https://nextjs.org/docs/routing/dynamic-routes

/// neeed to work out how to get URL data from hereeeeee....


///
