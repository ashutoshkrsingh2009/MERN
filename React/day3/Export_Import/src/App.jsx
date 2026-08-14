// default

// import name from "./component/navbar"
// import kuchbhi from "./component/navbar"

// function App() {

//   return (
//     <>
//       <h1>welcome {name}</h1>
//       <h1>welcome {kuchbhi}</h1>

//     </>
//   )
// }

// export default App


// by named

// import name from "./component/navbar"
// import kuchbhi from "./component/navbar"
// import {age} from "./component/navbar"
// import {city} from "./component/navbar"

// function App() {

//   return (
//     <>
//       <h1>welcome my name is {name}</h1>
//       <h1>welcome my name is {kuchbhi}</h1>
//       <h1> welcome my age is {age}</h1>
//        <h1> welcome my city is {city}</h1>

//     </>
//   )
// }

// export default App




// import Navbar from "./component/navbar"

// function App() {

//   return (
//     <>
//     <div>
//       < Navbar/>
//     </div>
//     </>
//   )
// }

// export default App





// this part by own
// by using default

// import Name from "./component/navbar"

// function App (){
//   return(
//     <h1> welcome { Name}</h1>
//   )
// }

// export default App



// now by using named

// import {Name} from "./component/navbar"
// import{age} from "./component/navbar"

// function App (){
//   return(
//     <>
//     <h1> welcome { Name}</h1>
//     <h1>my age is {age}</h1>

//     </>
//   )
// }

// export default App

// -----------something---------


// import Navbar from "./component/navbar"

// function App() {

//   return (
//     <>
//       <Navbar />
//     </>
//   )
// }

// export default App



// project1

// CREATE NAVBAR

// import Navbar from "./component/navbar"
// import MainContent from "./component/mainContent"
// import Footer from "./component/footer"

// function App() {

//   return (
//     <>
//     <div>
//       <Navbar />
//       <MainContent />
//       <Footer/>


//     </div>
//     </>
//   )
// }

// export default App


// project2


// import Navbar from "./component/navbar"
// import MainContent from "./component/mainContent"
// import Footer from "./component/footer"
// import Sidebar from "./component/sidebar"

// function App() {

//   return (
    
//     <div>
//       <Navbar />

// <div style={{ display: "flex" }}>
//   <Sidebar />
//   <MainContent />
// </div>
     
//       <Footer/>


//     </div>
    
//   )
// }

// export default App




// full by own 




import Navbar from "./component/navbar"
import Main from "./component/mainContent"
import Footer from "./component/footer"
import  Sidebar from "./component/sidebar"

function App (){
  return(
    <>
    <Navbar/>
    <div style={{display:"flex", flexDirection:"row"}}>
    < Sidebar/>
    <Main/>
    </div>
    
    <Footer/>
    </>
  )
}
export default App