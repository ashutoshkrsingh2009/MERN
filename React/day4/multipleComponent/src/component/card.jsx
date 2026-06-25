// function Card({ name, imgsrc }) {
//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         width: "fit-content",
//         padding: "10px"
//       }}
//     >
//       <img
//         src={imgsrc}
//         alt={name}
//         style={{
//           width: "200px",
//           height: "200px",
//           objectFit: "cover"
//         }}
//       />

//       <p>{name}</p>
//     </div>
//   );
// }

// export default Card;








// full class by own 

function Card({ image, name, age }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

export default Card;
