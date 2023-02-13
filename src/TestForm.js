import { useState } from "react";
import TestFormInput from "./TestFormInput";
import CodeDisplay from "./CodeDisplay";
import styles from "./test-form.module.css";
import styled from "styled-components";

function TestForm(props) {
    const [emailAddress, setEmailAddress] = useState('');
    const handleEmailChange = (e) => {
        setEmailAddress(e.target.value);
    }

    const Heading = styled.h1 `
        width: 50;
        margin: 0 auto;
        font-size: 2.2em;
        color: #333300;`

    return (
        <form>
            <Heading>Email Form</Heading>
            <br />
            <TestFormInput handleEmailChange={handleEmailChange} emailAddress={emailAddress} />
            <button style={{color: "white", fontSize: "1em", backgroundColor: "green", borderRadius: "3em", padding: ".5em 1em", marginLeft: "1em"}}>Sign up for our newsletter</button>
            <p>My email address: <span className={styles.redText}>{emailAddress}</span></p>
            <br />
            <hr />
            <br />
            <CodeDisplay />
        </form>
    )
}

export default TestForm;