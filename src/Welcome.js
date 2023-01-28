import { useState } from "react";
import Greeting from "./Greeting";

export default function Welcome() {
    const [personName, setPersonName] = useState('Jason');

    function setName(e) {
        setPersonName(e.target.value);
    }

    return (
      <div>
        <input type="text" onChange={setName} />
        <br />
        <Greeting personName={personName} />
      </div>
      );
  }
