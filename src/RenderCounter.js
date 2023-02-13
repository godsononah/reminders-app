import { useEffect, useState } from "react";

function RenderCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {console.log(count)});

    return (
        <div>
            This component will count how many times it renders.
            <button onClick={() => setCount((prev) => prev + 1)}>Update State</button>
        </div>
    );
}

export default RenderCounter;