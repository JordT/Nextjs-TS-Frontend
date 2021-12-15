import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import axios from "axios";
import Loading from './components/Loading'
import DisplayCharacter from './components/DisplayCharacter' 
import ReactPaginate from 'react-paginate'

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

// Display character info - array is clunky
  const displayChar = () => {
    let displayArray: Array<Object>  = []
    characterList.results.map((i: Object) => {
      displayArray.push(<DisplayCharacter character={i} />)
    })
    return displayArray
  }

  //Handle Page click
  const handlePageClick = (event) => {
    console.log(event.selected + 1)
    setCurrentPage(event.selected + 1)
   }

  //set up pagination so that each page auto creates a sub page displaying that info?

  return (
    <div className={styles.container}>
      <Head>
        <title>Character Selector</title>
        <meta name="description" content="Rick and morty Characters!" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main className={styles.main}>
        {/* If API is successful, display characters */}
        {/* {loading ? <Loading /> : <DisplayCharacter character={characterList.results[1]}/>} */}

        
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Select a character to learn more!
        </p>
        {/* pagination component */}
        <ReactPaginate 
          onPageChange={(event) => handlePageClick(event)}
          // onClick={(event) => handlePageClick(event)} // wrong
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}
          previousLabel="<< Previous"
          nextLabel="Next >>"
          breakLabel="..."
          pageCount={42} //could be dynamic
          containerClassName="pagination justify-content-center"
          // start of classes
          pageClassName="page-item" 
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />

        <div className={styles.displayContainer}>
          {/* display characters once they've been retrieved */}
          {loading ? <Loading/> : displayChar()}
        </div>
 
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Character 1  &rarr;</h2>
            <p>Name and Stats</p>
          </a>

        {/* </div> */}
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
