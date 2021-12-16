import styles from '../../styles/Home.module.css'
// import Link from 'next/Link'

const DisplayCharacter = (props: any) => {
    return (
    <div className={styles.grid}>
        <div className={styles.card}>
            <h2>{props.character.name}</h2>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            {/* <Link href="/character/CharacterPage" /> */}
            {/* <p>{props.character.origin}</p> */}
            {/* <p>{props.character.lastknownorigin}</p> */}
            {/* <p>{props.character.numb of episodes}</p> */}
            {/* image */}
        </div>
    </div>
    )
}

export default DisplayCharacter;