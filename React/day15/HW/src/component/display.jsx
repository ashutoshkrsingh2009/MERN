import { useSelector } from "react-redux"
function Display() {
    const data=useSelector(store=>store.data)
  return (
    <ul>
        {data.map((item)=>{
          return <li>{item}</li>
        })}
    </ul>
  )
}

export default Display