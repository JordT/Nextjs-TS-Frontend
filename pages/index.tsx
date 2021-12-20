import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import axios from "axios";
import DisplayCharacter from './components/DisplayCharacter' 
import ReactPaginate from 'react-paginate'
import CharacterCard from './components/CharacterCard';
import { AnyMxRecord } from 'dns';
 
const Home: NextPage = () => {

  const [characterList, setCharacterList] = useState({})
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

// Get character info from api
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(res => {
      setCharacterList(res.data)
      setLoading(false)
    })
  }, [currentPage])

  const handlePageClick = (event:any) => {
    setCurrentPage(event.selected + 1)
   }

  return (
    <div className={styles.container}>
      <Head>
        <title>Character Selector</title>
        <meta name="description" content="Rick and morty Characters!" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className={styles.main}  data-cy="main" >
        <h3 className={styles.title} data-cy="h3-title">Rick and Morty Characters!</h3>
        <p className={styles.description}>Select a character to learn more!</p>
        
        <ReactPaginate
          onPageChange={(event) => handlePageClick(event)}
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}
          previousLabel="<< Previous"
          nextLabel="Next >>"
          pageCount={42} //could be dynamic
          containerClassName={styles.pagination}
        />

      {loading ? <p></p> : <CharacterCard charList={characterList}/>}  

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.github.com/jordt"
          target="_blank"
          rel="author"
        >
          Created by&nbsp;<b>JordT</b>
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
