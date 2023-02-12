import { useState } from "react";
import TestFormInput from "./TestFormInput";

function TestForm(props) {
    const [emailAddress, setEmailAddress] = useState('');
    const handleEmailChange = (e) => {
        setEmailAddress(e.target.value);
    }

    return (
        <form>
            <TestFormInput handleEmailChange={handleEmailChange} emailAddress={emailAddress} />
            <button>Sign up for our newsletter</button>
            <p>My email address: {emailAddress}</p>
        </form>
    )
}

export default TestForm;