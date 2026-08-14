import { useState } from "react"
function Form() {
    const [data,setdata]=useState({
        username:"",
        password:"",
        gmail:""
    })
  return (
    // <div style={{height:"100vh",width:"100vw",backgroundColor:"lightcoral"}}>
        <form style={{display:"flex",flexDirection:"column",border:"1px solid black",width:"30vw",justifyContent:"center", alignItems:"center"}}>
            <label htmlFor="">Username</label>
            <input onInput={(e)=>{
              setdata({
                ...data,
                username: e.target.value
              })
            }} type="text" placeholder="Enter username" />

            <label htmlFor="">password</label>

            <input onInput={(e)=>{
             setdata({
                ...data,
                password: e.target.value
              })
              }} type="password" placeholder="Enter your password"/>

            <label htmlFor="">Email</label>           
            <input onInput={(e)=>{
             setdata({
                ...data,
                gmail: e.target.value
              })           
              }} type="Email" placeholder="Enter your Email"/>

            <button onClick={()=>{
                console.log(data);
                
            }} >SUBMIT</button>

            
        
        </form>
    // </div>
  )
}

export default Form