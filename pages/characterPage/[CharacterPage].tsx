import { useRouter } from "next/router";
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../styles/Home.module.css'

const CharacterPage = () => {
  const router = useRouter()
  const characterToRetrieve = router.query.CharacterPage
  const homeURL = "http://localhost:3000"

  const [characterInfo, setCharacterInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${characterToRetrieve}`)
    .then(res => {
      setCharacterInfo(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <div >
      <Head>
        <title>Character Page</title>
        <meta name="description" content="Rick and Morty characters page" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className={styles.main} >
        <a href={homeURL} className={styles.anchor}><u>&lt;Home</u></a>
        
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

