import { useState } from "react";

function TestForm(props) {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <form>
            <input onChange={handleEmailChange} value={email} type="text" name="emailAddress" />
            <button>Sign up for our newsletter</button>
            <p>{email}</p>
        </form>
    )
}

export default TestForm;