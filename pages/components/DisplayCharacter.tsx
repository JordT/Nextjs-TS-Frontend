import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const DisplayCharacter = (props: any) => {
    const charPageURL = `/characterPage/${props.character.id}`
    
    return (
    <div className={styles.grid}>
        <Link href={charPageURL}>
            <div className={styles.card}>
                <h2>{props.character.name}</h2>
                <p>Image goes here...</p>
            </div>
        </Link>
    </div>
    )
}

export default DisplayCharacter;