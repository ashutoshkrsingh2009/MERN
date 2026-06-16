function clickpicture()
{

    return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("picture clicked");
    res()
    },4000)
    })

}

function selectpicture()
{
      return new Promise((res,rej)=>{
     setTimeout(()=>{
        console.log("picture selected");
        res()
    },3000)       
    })

}

function applyfilter()
{
        return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("filter selected");
        res()
    },2000)        
    })
}


function choosecaption()
{
        return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("caption selected");
        res()
    },2000)        
    })

}

function postpicture()
{
        return new Promise((res,rej)=>{
     setTimeout(()=>{
        console.log("picture posted");
        res()
    },1000)       
    })

}

// clickpicture(()=>{
//     selectpicture(()=>{
//         applyfilter(()=>{
//             choosecaption(()=>{
//                 postpicture()
//             })
//         })
//     })
// })
clickpicture()
.then(selectpicture)
.then(applyfilter)
.then(choosecaption)
.then(postpicture)
