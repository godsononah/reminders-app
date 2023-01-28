import { useState } from "react";

export default function Welcome() {
    const [personName, setPersonName] = useState('Jason');

    function setName(e) {
        setPersonName(e.target.value);
    }

    return (
      <div>
        <input type="text" onChange={setName} />
        <br />
        <h2>Welcome {personName}!</h2>
      </div>
      );
  }
