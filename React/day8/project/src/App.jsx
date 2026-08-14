import Harrypoter from "./component/harrypoter"
import Todo from "./component/todo"
import Users from "./component/users"
import{Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <div>

<nav className="h-16 w-full border flex items-center justify-around bg-blue-100">
  <Link to="/Users">USER API'S</Link>
  <Link to="/Todo">TODO API'S</Link>
  <Link to="/Harrypoter">HARRYPOTER API'S</Link>
</nav>
    
    <Routes>
        <Route path="/Harrypoter" element={<Harrypoter/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/users" element={<Users/>} />                
    </Routes>
    </div>
  )
}

export default App