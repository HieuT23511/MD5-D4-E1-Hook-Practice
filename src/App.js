import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import Selector from "./components/Selector";
import Clock from "./components/Clock";

function App() {
    let [isShow1, setIsShow1] = useState(true);
    let [isShow2, setIsShow2] = useState(true);
    let [isShow3, setIsShow3] = useState(true);

    return (
        <>
            {/*Practice1: */}
            <button onClick={() => {
                setIsShow1(!isShow1)
            }
            }>ShowP1
            </button>
            {isShow1 && <Counter props={"Practice 1: "}/>}

            {/*Practice2: */}
            <button onClick={() => {
                setIsShow2(!isShow2)
            }
            }>ShowP2
            </button>
            {isShow2 && <Selector props={"Practice 2: "}/>}

            {/*Practice3: */}
            <button onClick={() => {
                setIsShow3(!isShow3)
            }
            }>ShowP3
            </button>
            {isShow3 && <Clock props={"Practice 3: "}/>}
        </>
    );
}

export default App;
