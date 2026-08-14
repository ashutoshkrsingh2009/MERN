
function Navbar({setmode}) {
  return (
    <div style={{height:"3vh",width:"100vw",backgroundColor:"beige"}}>
        <button onClick={()=>{
            setmode(true)
        }} >Dark Mode</button>
        <button onClick={()=>{
            setmode(false)
        }} >Light mode</button>
    </div>
  )
}

export default Navbar