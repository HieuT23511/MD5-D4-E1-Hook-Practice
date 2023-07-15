import useClock from "../hooks/useClock";

export default function Clock({props}) {
    const [time, ampm] = useClock();
    return (
        <>
            <h2>{props}</h2>
            <div style={{textAlign: "center"}}>
                <div><h2>The time is : </h2></div>
                <div style={{background: "blue"}}> {time} <span> {ampm}</span></div>
            </div>
        </>
    )
}