import usecustomhook from "./usecustomhook";
export default function Mainpage(){
    const {count,increment,decrement,reset}=usecustomhook(0)
    return(
            <div>
        <p>count value is {count}</p>
        <button onClick={increment}>+</button> <br />
        <button onClick={decrement}>-</button> <br />
        <button onClick={reset}>Reset me</button>


        
        </div>
    )
}