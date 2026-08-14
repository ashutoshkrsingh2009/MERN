 import usecustomhook from "./usecustomhook"
 export default function Mynewpage() {
    const {count,increment,decrement,reset}=usecustomhook(100)
    return(
            <div>
        <p>count value is {count}</p>
        <button onClick={increment}>+</button> <br />
        <button onClick={decrement}>-</button> <br />
        <button onClick={reset}>Reset me</button>


        
        </div>
    )
}