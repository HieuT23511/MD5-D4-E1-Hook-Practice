import {useState} from "react";

export default function Counter({props}) {
    const [number, setNumber] = useState(0)
    let handleClick = () => {
        setNumber(number+1)
    }
    return (
        <>
            <h2>{props}</h2>
            <div style={{textAlign: "center"}}>
                <h3>{number}</h3>
                <button onClick={handleClick}>Count</button>
            </div>
        </>
    )
}