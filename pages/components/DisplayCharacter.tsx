import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const DisplayCharacter = (props: any) => {
    const charPageURL = `/characterPage/${props.character.id}`
    const imageURL = props.character.image

    return (
    <div className={styles.grid} data-cy={`card-${props.character.id}`}>
        <Link href={charPageURL}>
            <div className={styles.card}>
                <h2>{props.character.name}</h2>
                <Image src={imageURL} height='120' width='120' className={styles.smallImage} />
            </div>
        </Link>
    </div>
    )
}

export default DisplayCharacter;