// default
 
// let name="ashu"
// export default name

// named

// let name= "ashu"
// export let age=20
// export let city="mumbai"

// export default name


// this part by own in home
// by using default



// let Name='Ashutosh'

// export default Name







// now by using named


// export let Name="aks"
// export let age=20





// -------------- something---------//

// function Navbar (){
//      return (
//         <nav>navbar</nav>
//      )
// }

// export default Navbar



// project 1

// CREATE NAVBAR


// function Navbar (){
//      return (
//         <nav style={{display:"flex", backgroundColor:"pink",border:"1px solid black",justifyContent:"space-between",alignItems:"center",height:"10vh"}}>
//             <div style={{marginLeft:"20px"}} >logo</div>
//             <div style={{display:"flex",justifyContent:"space-between",marginRight:"10px",gap:"20px"}} >
//                 <a style={{textDecoration:"none"}} href="">Abc</a>
//                 <a style={{textDecoration:"none"}} href="">Bbc</a>
//                 <a style={{textDecoration:"none"}} href="">Ccc</a>
//             </div>

//         </nav>
//      )
// }

// export default Navbar


// project 2



function Navbar (){
     return (
        <nav style={{display:"flex", backgroundColor:"pink",border:"1px solid black",justifyContent:"space-between",alignItems:"center",height:"10vh"}}>
            <img src="https://images.unsplash.com/vector-1739894765706-53e5b22c1851?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nbyUyMHBpbmt8ZW58MHx8MHx8fDA%3D" style={{marginLeft:"20px",height:"40px"}} alt="error" />
            <div style={{display:"flex",justifyContent:"space-between",marginRight:"10px",gap:"20px"}} >
                <a style={{textDecoration:"none"}} href="">Abc</a>
                <a style={{textDecoration:"none"}} href="">Bbc</a>
                <a style={{textDecoration:"none"}} href="">Ccc</a>
            </div>

        </nav>
     )
}

export default Navbar