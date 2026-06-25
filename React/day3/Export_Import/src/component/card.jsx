
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

function Card({name,price,image}){
  
    return(
     <article style={{backgroundColor:"lightsteelblue"}}>
        <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }}
      />
        <h1>{name}</h1>
        <p>{price}</p>
        
        
     </article>
    )
}
export default Card







