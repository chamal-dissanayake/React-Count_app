import React, {useState	} from "react";

function Counterfun (){
    let [number, setNumber] = useState(0)

    function increment(){
        setNumber(++number)
    }


    function decrement(){
        setNumber(--number)
    }

    return(
        <div>
            <h3>Hello function World</h3>
            <h1>Counter = {number}</h1>
            <button onClick={e => increment()}>Increment</button>
            <br/>
            <br/>
            <button onClick={e => decrement()}>Decrement</button>

        </div>
    )

}
export default Counterfun;