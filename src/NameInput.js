function NameInput(props) {
    return(
        <>
            <input type="text" onChange={props.changeHandler} />
        </>
    )
}

export default NameInput;