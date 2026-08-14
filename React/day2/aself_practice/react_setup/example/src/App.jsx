

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



// function App() 
// { 
//      return(
// <>
//   {/* <Navbar/> */}
//   {Navbar()}
//   <Main/>
//   <Footer/>
// </>
//      )


// }

// export default App

// function Navbar(){
//   let name="ashu";
//   return( 
//     <h1 style={{height:"10vh",width:"100vw",backgroundColor:"lightblue",borderStyle:"dotted",margin:"0"}} > `welcome {name} This is navbar`</h1>
//   )
// }

// function Main(){
//   return(
//     <main style={{height:"85vh", width:"100vw",backgroundColor:"lightpink",borderStyle:"dotted"}} >This is main tag.</main>
//   )
// }

// function Footer(){
//   return(
//     <footer style={{height:"5vh", width:"100vw",backgroundColor:"lightred",borderStyle:"dotted"}} >This is footer.</footer>
//   )
// }

import React from 'react'

function App() {
  return (
    <>
     {/* {Nav()}
     {Body()}
     {Footer()} */}

     {/* another way */}

     <Nav/>
     <Body/>
     <Footer/>


    </>
  )
}

export default App

function Nav(){
  return(
    <div>
      <h3>logo</h3>
      <a href="">a</a>
      <a href="">b</a>
      <a href="">a</a>
      <a href="">b</a>

    </div>
  )
}

function Body(){
  return(
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, nemo atque! Nesciunt laborum architecto voluptatibus ea velit mollitia libero recusandae saepe, debitis odit fugiat provident molestiae, tenetur at ratione. Voluptate.
      Explicabo ea fuga voluptatibus modi quisquam, beatae nemo? Voluptate adipisci ducimus quisquam nam, amet saepe fugiat sed odit porro ut unde non. Provident aperiam nam odio non enim cum earum.
      Aliquam natus maiores architecto est quo similique modi dignissimos corporis doloribus illum ea dolorum neque accusamus voluptatem ducimus at, eos optio itaque rerum blanditiis alias reiciendis numquam minima sed. Vel!
      Amet fugiat maiores culpa aut? Eius fugit tenetur incidunt laborum architecto, eligendi in. Deleniti quaerat molestias sapiente expedita minus sit velit? Nihil delectus odit quibusdam deserunt, asperiores quam excepturi? Adipisci!
      Vero in rerum porro libero optio culpa! Cum deserunt optio suscipit error ad architecto quam tenetur ut enim nobis illum fugit corporis dicta nam, rerum officiis quae fuga provident esse.</p>
    </div>
  )
}

function Footer(){
  return(
    <div>
<p> &copy; 2026 Ashutosh kr singh </p>

    </div>
  )
}