// import Counter from "./component/counter"
// function App() {
//   return (
//     <Counter/>
//   )
// }

// export default App



// now by using hook that is useState() to solve counter problem



import Counter from "./component/counter"
import Text from "./component/text"
import Sidebar from "./component/sidebar"
function App() {
  return (
    
      <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >

  <div>
    <Sidebar/>
  </div>

  <div>
     <Counter/>
    < Text/>  
   </div>



  </div>




 
    

  )
}

export default App