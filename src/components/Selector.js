import {useEffect, useState} from "react";

export default function Selector({props}) {
    let [selected, setSelected] = useState(0);
    let [valueSelected, setValueSelected] = useState("")
    const handleChange = (e) => {
        setSelected(e.target.value)
        console.log(selected)
    }
    useEffect(()=>{
        switch (selected){
            case "0" :
                setValueSelected("Java");
                break;
            case "1" :
                setValueSelected(("PHP"))
                break;
            case "2" :
                setValueSelected("JS");
                break;
            case "3" :
                setValueSelected("Python")
                break;
        }

    },[selected])
    return (
        <>
            <h2>{props}</h2>
            <div style={{textAlign: "center"}}>
                <div> <h2>Choose the Course: </h2></div>
                <select name="course" id="course" onChange={handleChange}>
                    <option value="">--Please Pick the Course--</option>
                    <option value="0">Java</option>
                    <option value="1">PHP</option>
                    <option value="2">JS</option>
                    <option value="3">Python</option>
                </select>
                <div><h3>Your selected is : {valueSelected}</h3></div>
            </div>
        </>
    )
}