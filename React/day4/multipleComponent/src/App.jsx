// import Card from "./component/Card";

// function App() {
//   const products = [
//     {
//       name: "Laptop",
//       img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
//     },
//     {
//       name: "Mobile",
//       img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
//     },
//     {
//       name: "Watch",
//       img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
//     }
//   ];

//   return (
//     <div>
//       {products.map((item, index) => (
//         <Card
//           key={index}
//           imgsrc={item.img}
//           name={item.name}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
















// full class by own 

// import Card from "./component/Card"

// function App() {
//   const students = [
//   {
//     name: "Rahul Sharma",
//     age: 20,
//     img: "https://randomuser.me/api/portraits/men/1.jpg"
//   },
//   {
//     name: "Priya Singh",
//     age: 19,
//     img: "https://randomuser.me/api/portraits/women/2.jpg"
//   },
//   {
//     name: "Aman Verma",
//     age: 21,
//     img: "https://randomuser.me/api/portraits/men/3.jpg"
//   },
//   {
//     name: "Sneha Gupta",
//     age: 20,
//     img: "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     name: "Rohit Kumar",
//     age: 22,
//     img: "https://randomuser.me/api/portraits/men/5.jpg"
//   },
//   {
//     name: "Ananya Mishra",
//     age: 18,
//     img: "https://randomuser.me/api/portraits/women/6.jpg"
//   },
//   {
//     name: "Vikash Yadav",
//     age: 21,
//     img: "https://randomuser.me/api/portraits/men/7.jpg"
//   },
//   {
//     name: "Neha Patel",
//     age: 19,
//     img: "https://randomuser.me/api/portraits/women/8.jpg"
//   },
//   {
//     name: "Arjun Singh",
//     age: 23,
//     img: "https://randomuser.me/api/portraits/men/9.jpg"
//   },
//   {
//     name: "Kavya Roy",
//     age: 20,
//     img: "https://randomuser.me/api/portraits/women/10.jpg"
//   }
// ];
//   return (

//       <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}} >
//       {students.map((item)=>{
//         return (
//         < Card 
          
//           image={item.img}
//           name={item.name}
//           age={item.age}
//         />
//         )
//       })}
    
//     </div>
//   )
// }
// export default App








// how to add event on react



function App() {

  function btnClickedHandler(){
    console.log("btn clicked");
  }
  
  return (
    <button onClick={btnClickedHandler} >click-me</button>
  )
}

export default App