

function Left({setval}) {
  return (
    <div>
    <input onInput={(e)=>{
       setval(e.target.value)
    }} style={{
        height:"30vh",
        width:"20vw",
        padding:"10px"
    }} type="text"/>
    </div>
  )
}

export default Left