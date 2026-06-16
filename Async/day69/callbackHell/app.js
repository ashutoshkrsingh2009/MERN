
// pyramid doom

function clickpicture(fn)
{
    setTimeout(()=>{
        console.log("picture clicked");
        fn()
    },4000)
}

function selectpicture(fn)
{
    setTimeout(()=>{
        console.log("picture selected");
        fn()
    },3000)
}

function applyfilter(fn)
{
    setTimeout(()=>{
        console.log("filter selected");
        fn()
    },2000)
}


function choosecaption(fn)
{
    setTimeout(()=>{
        console.log("caption selected");
        fn()
    },2000)
}

function postpicture()
{
    setTimeout(()=>{
        console.log("picture posted");
        
    },1000)
}

clickpicture(()=>{
    selectpicture(()=>{
        applyfilter(()=>{
            choosecaption(()=>{
                postpicture()
            })
        })
    })
})
