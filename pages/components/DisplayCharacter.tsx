const DisplayCharacter = (props) => {
    console.log(props.character)
    return (
    <div>
        <p>Character: {props.character.name}</p>
        <p>Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
        <p>Gender: {props.character.gender}</p>
        {/* <p>{props.character.origin}</p> */}
        {/* <p>{props.character.lastknownorigin}</p> */}
        {/* <p>{props.character.numb of episodes}</p> */}
        {/* image */}
    </div>
    )
}

export default DisplayCharacter;