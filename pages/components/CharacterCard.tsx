import { AnyCnameRecord } from "dns";
import React from "react";
import styles from '../../styles/Home.module.css'
import DisplayCharacter from "./DisplayCharacter";

function CharacterCard(props: any) {
    let displayArray: Array<any> = []

    props.charList.results.map((i: Object) => {
      displayArray.push(<DisplayCharacter character={i} />)
    })

    return (
        <div className={styles.displayContainer}>
            {displayArray}
        </div>
    );
}

export default CharacterCard;