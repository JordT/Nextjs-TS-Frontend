import { useRouter } from "next/router";
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../styles/Home.module.css'

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

  // link to prev page if char to retrieve isn't ==1

  // link to next page if char to retrieve isn't ===826

  return (
    <div >
      <Head>
        <title>Character Page</title>
        <meta name="description" content="Rick and morty Characters pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      
      {/* getting a stack error on this line... */}
      {/* just want to return a back button if we're no on page 1. */}
      {/* need to add page navigation and testing only. */}
      <main className={styles.main} >
        { characterToRetrieve != undefined && characterToRetrieve > 1 ? <Link href="http://localhost:3000"> <p className={styles.anchor}> &lt; Previous Character</p> </Link> : <p></p> }

        <a href="http://localhost:3000" className={styles.anchor}><u>Click here to go back to character selection</u></a>
        <h1>Character Page</h1>
        <div className={styles.displayContainer}>
          <div>
            <p><b>Name:</b> {characterInfo.name}</p>
            <p><b>Status:</b> {characterInfo.status}</p>
            <p><b>Species:</b> {characterInfo.species}</p>
            <p><b>Gender:</b> {characterInfo.gender}</p>
            { loading ? <p></p> : <p><b>Origin:</b> {characterInfo.origin.name}</p>}
            { loading ? <p></p> : <p><b>Last know location:</b> {characterInfo.location.name}</p>}
            { loading ? <p></p> : <p><b>Number of appearances:</b> {characterInfo.episode.length}</p>}
          </div>
          <div>
            { loading ? <p></p> : <Image src={characterInfo.image} height='300' width='300' className={styles.largeImage}/>}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CharacterPage

