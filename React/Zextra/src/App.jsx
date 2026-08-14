import {Routes,Route,Link} from "react-router-dom"
import { lazy,Suspense } from "react"

const LazyLoadedA= lazy(()=> import("./Components/A"))
const LazyLoadedB= lazy(()=> import("./Components/B"))
const LazyLoadedC= lazy(()=> import("./Components/C"))
const LazyLoadedD= lazy(()=> import("./Components/D"))
const LazyLoadedLandng= lazy(()=> import("./Components/Landing"))

function App() {
  return (
    <div>
      <nav className="flex justify-between bg-blue-500 text-white p-4">
        <link to="/a" > A</link>
        <link to="/b" > B</link>
        <link to="/c" > C</link>
        <link to="/d" > D</link>
        <link to="/landind" >Landing</link> 
      </nav>

      <Routes>
        <Route element={
          <Suspense fallback={<h1>wait page is comming</h1>}>
            <LazyLoadedLandng/>
          </Suspense>} Path ="/" />
        
      </Routes>
    </div>
  )
}

export default App