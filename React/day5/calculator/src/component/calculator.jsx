
import { useState } from "react"

function Calculator() {
    const[val, SetVal]=useState("0")

    let operators=["+","-","*","/","%","."]

    function btnClickHandler(e)
    {



        let EnteredValue=e.target.innerText



let enteredValue = e.target.innerText
    if(val === "0" && operators.includes(enteredValue))return

    if(operators.includes(val[val.length - 1]) && operators.includes(enteredValue) && val[val.length - 1] == enteredValue)
    {
      return
    }


    if(operators.includes(val[val.length - 1]) && operators.includes(enteredValue) && val[val.length - 1] != enteredValue)
    {
      SetVal(val.slice(0, val.length - 1) + enteredValue)
      return
    }

        if(val==0)
        {
            SetVal(EnteredValue)
        }
        else
        {
           SetVal(val+e.target.innerText)
        }
     
        
    }
  return (
    <div id="screen">
        <div id="calc">
            <div id="display">
                        {val}
            </div>
            <div id="btns-container">
                <button onClick={()=>{
                    SetVal("0")
                }} className="btn" >c</button>
                <button onClick={btnClickHandler} className="btn" >%</button>
                <button onClick={() => 
                {
                    if (val.length === 1) {
                         SetVal("0");
                        } 
                        else
                       {
                           SetVal(val.slice(0, -1));
                       }
                         }} className="btn" >⌫</button>
                <button onClick={btnClickHandler} className="btn" >/</button>

                <button onClick={btnClickHandler} className="btn" >7</button>
                <button onClick={btnClickHandler} className="btn" >8</button>
                <button onClick={btnClickHandler} className="btn" >9</button>
                <button onClick={btnClickHandler} className="btn" >*</button>

                <button onClick={btnClickHandler} className="btn" >4</button>
                <button onClick={btnClickHandler} className="btn" >5</button>
                <button onClick={btnClickHandler} className="btn" >6</button>
                <button onClick={btnClickHandler} className="btn" >-</button>

                <button onClick={btnClickHandler} className="btn" >1</button>
                <button onClick={btnClickHandler} className="btn" >2</button>
                <button onClick={btnClickHandler} className="btn" >3</button>
                <button onClick={btnClickHandler} className="btn" >+</button> 

                <button onClick={btnClickHandler} className="btn" >00</button>
                <button onClick={btnClickHandler} className="btn" >0</button>
                <button onClick={btnClickHandler} className="btn" >.</button>
          <button onClick={() => {
            let ans = eval(val)
            SetVal(ans)
          }} className='btn'>=</button>            </div>
        </div>
    </div>
  )
}

export default Calculator