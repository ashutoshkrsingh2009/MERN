
// using direct props

// function Card(props){
//     return(
//      <article style={{backgroundColor:"lightsteelblue"}}>
//         <img
//         src={props.image}
//         alt={props.name}
//         style={{
//           width: "100%",
//           height: "180px",
//           objectFit: "cover"
//         }}
//       />
//         <h1>{props.name}</h1>
//         <p>{props.price}</p>
        
        
//      </article>
//     )
// }
// export default Card


// using destructure

// function Card({name,price,image}){
  
//     return(
//      <article style={{backgroundColor:"lightsteelblue"}}>
//         <img
//         src={image}
//         alt={name}
//         style={{
//           width: "100%",
//           height: "180px",
//           objectFit: "cover"
//         }}
//       />
        
//         <h1>{name}</h1>
//         <p>{price}</p>
        
        
//      </article>
//     )
// }
// export default Card



// by own 

function Card({name,age}) {
  return (
    <div style={{height:"100px",width:"100px",border:"2px solid black"}}>
    <h1>{name}</h1>
    <h1>{age}</h1>


    </div>
  )
}

export default Card







