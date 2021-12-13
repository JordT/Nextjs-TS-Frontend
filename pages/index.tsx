import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import axios from "axios";
import Loading from './components/Loading'
import DisplayCharacter from './components/DisplayCharacter' 

const Home: NextPage = () => {
  // get request rickandmortyapi and save result in state
  const [characterList, setCharacterList] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const result = axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacterList(res.data)
      setLoading(false)
    })
  }, [])

  //in the return, incredimentally pass that info as props into a generic component


  //set up pagination so that each page auto creates a sub page displaying that info?

  return (
    <div className={styles.container}>
      <Head>
        <title>Character Selector</title>
        <meta name="description" content="Rick and morty Characters!" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className={styles.main}>
        {loading ? <Loading /> : <DisplayCharacter character={characterList.results[0]}/>}
        {/* <p>{characterList.results[0].name}</p> */}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        {/* Pass individual character information into display component
        {characterList.results.map((_,i) => {
          return <DisplayCharacter 
                  name={characterList.results[i]}
                  />
        })} */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Character 1  &rarr;</h2>
            <p>Name and Stats</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Name and Stats</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Name and Stats</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Name and Stats</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Name and Stats</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Name and Stats</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.github.com/jordt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by JordT
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
