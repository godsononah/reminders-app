import { useState } from "react";
import Greeting from "./Greeting";
import NameInput from "./NameInput";

export default function Welcome() {
    const [personName, setPersonName] = useState('Jason');

    function setName(e) {
        setPersonName(e.target.value);
    }

    return (
      <div>
        <NameInput changeHandler={setName} />
        <br />
        <Greeting personName={personName} />
      </div>
      );
  }
