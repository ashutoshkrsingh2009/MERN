

// function App() 
// {
//    return (
//     <nav style={{display:"flex",justifyContent:"space-between",border:"1px solid black",alignItems:"center",backgroundColor:"lightcoral"}}>
//        <h1>logo</h1>
//        <div>
//       <a href="">abc</a>
//       <a href="">xyz</a>
//       <a href="">efg</a>
//        </div>

      
//     </nav>
//    )
// }

// export default App




// function App() 
// {
//    return (
//     <>
//       <div style={{height:"25vh",backgroundColor:"lightpink",border:"1px solid black"}} >A</div>
//       <div style={{height:"25vh",backgroundColor:"lightpink",border:"1px solid black"}} >b</div>
//       <div style={{height:"25vh",backgroundColor:"lightpink",border:"1px solid black"}} >C</div>
//       <div style={{height:"25vh",backgroundColor:"lightpink",border:"1px solid black"}} >d </div>
//     </>
//    )
// }

// export default App



function App() 
{ 
     return(
<>
  {/* <Navbar/> */}
  {Navbar()}
  <Main/>
  <Footer/>
</>
     )


}

export default App

function Navbar(){
  let name="ashu";
  return( 
    <h1 style={{height:"10vh",width:"100vw",backgroundColor:"lightblue",borderStyle:"dotted",margin:"0"}} > `welcome {name} This is navbar`</h1>
  )
}

function Main(){
  return(
    <main style={{height:"85vh", width:"100vw",backgroundColor:"lightpink",borderStyle:"dotted"}} >This is main tag.</main>
  )
}

function Footer(){
  return(
    <footer style={{height:"5vh", width:"100vw",backgroundColor:"lightred",borderStyle:"dotted"}} >This is footer.</footer>
  )
}
