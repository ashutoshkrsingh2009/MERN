// console.log(Promise);
// console.log(Promise.prototype);
// console.log(Promise.prototype.__proto__);
// console.log(Promise.prototype.__proto__.__proto__);

// const p1=new Promise((resolve,reject)=>{
//     let arr=[1,3]
//     if(arr.length>0)
//     {
//         resolve(arr)
//     }
//     else{
//         reject("data nhi mila")
//     }
// })

// // console.log(p1);
// p1.then((data)=>{
//     console.log(data)
// }).catch((rej)=>{
//     console.log(rej);
// })


// without data

// const p1=new Promise((resolve,reject)=>{
//     let arr=[]
//     if(arr.length>0)
//     {
//         resolve(arr)
//     }
//     else{
//         reject("data nhi mila")
//     }
// })

// // console.log(p1);
// p1.then((data)=>{
//     console.log(data)
// }).catch((rej)=>{
//     console.log(rej);
// })




// const p2=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//    resolve({name:"ashu"})
//    },4000)
// })

// p2.then((data)=>{
//     console.log(data); 
// }).catch((error)=>{
//    console.log(error);
// }).finally(()=>{
//     console.log("hum toh chalege hii ");  
// })


// ----------full class by own--------------//

// console.log(Promise);
// console.log(Promise.prototype);
// console.log(Promise.__proto__);

// --------------how to create promise---------------------//
// let mypromise=new Promise((resolve,reject)=>{
  
// }) 

// console.log(mypromise);   // in this code promise status is pending


// let mypromise=new Promise((resolve,reject)=>{
   
//     resolve()
// }) 

// console.log(mypromise);  // in this case promise is fulfilled with undefined because no data


// let mypromise=new Promise((resolve,reject)=>{
   
//     reject()
// }) 

// console.log(mypromise);  // in this case promise is rejected with undefined because no data


// now understand with data

// let mypromise=new Promise((resolve,reject)=>{
//    let arr=[]
//    if(arr.length>0)
//    {
//     resolve(arr)
//    }
//    else
//    {
//     reject("data nhi mila")
//    }
// }) 

// console.log(mypromise);  // here else will encounter and output will be promise rejected
// // now by using then and catch
// mypromise.then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error); 
// })

// ----------or------------

// let mypromise=new Promise((resolve,reject)=>{
//    let arr=[1,2,3,4,5]
//    if(arr.length>0)
//    {
//     resolve(arr)
//    }
//    else
//    {
//     reject()
//    }
// }) 

// console.log(mypromise);  // here else will encounter and output will be promise rejected

// now by using then and catch //
// mypromise.then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error); 
// })


// now make one promise and apply .then and .catch
// using .then 

// const p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve({name:"ashu"})
//   },3000)  
// })
// p1.then((data)=>{
//     console.log(data);
    
// })

// using .catch

// const p2=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("data nhi mila")
//   },3000)  
// })
// p2.catch((error)=>{
//     console.log(error);
// })

// both together

// const p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve({name:"ashu"})
//     reject("data nhi mila")
//   },3000)  
// })
// p1.then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("mai toh chaluga hii");
    
// })