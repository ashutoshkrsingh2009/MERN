import { useMemo, useState } from "react"
function App() {

  const[n,setN]=useState(1)
  const [text,setText]=useState("")

  function nthPrime(n) {
    let count = 0;
    let num = 1;

    while (count < n) {
        num++;

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return num;
}
let ans=nthPrime(n)
// let ans=useMemo(()=>nthPrime(n),[n])

  return (
    <div>
      <div>
        <h1>{n}th prime number is {ans}</h1>
        <input type="text" onChange={(e)=>{
          setN(Number(e.target.value))
        }} />
      </div>
      <div>
        <h1>{text}</h1>
        <input type="text" onChange={(e)=>{
          setText(e.target.value)
        }} />
      </div>
    </div>
  )
}

export default App