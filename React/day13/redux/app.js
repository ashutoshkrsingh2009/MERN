const { createStore, combineReducers } = require("redux")

function buycake(q){
    return{
        type:"buycake",
        payload:q || 1
    }
}

function restockcake(){
    return{
        type:"restockcake"
    }
    
}

function buyic(q){
    return{
    type:"buyic",
    payload:q||1
    }
}

function restockic(){
    return{

        type:"restockic"
    }
}

const initialcakestate={
    numberofcake:12,
}

const initialic={
    numberofic:50
}

const iceCreamReducer=(state=initialic,action)=>{
    switch(action.type)
    {
        case "buyic":
          if(action.payload>state.numberofic)  
          {
            return state
          }
        return{
            numberofic:state.numberofic-action.payload
        }
        case "restockic":
            return{
                numberofic:50
            }
            default:
                return state
    }
}

const cakereducer=(state=initialcakestate,action)=>{
   switch(action.type)
   {
      case "buycake":
        if(action.payload>state.numberofcake)
        {
            return state
        }
      return{
        numberofcake:state.numberofcake-action.payload
      }
      case "restockcake":
      return{
        numberofcake:12
      }
      default:
        return state

   }
}

 const rootReducer=combineReducers({
    cake:cakereducer,
    ice: iceCreamReducer
})
const store = createStore(rootReducer);
 const un=store.subscribe(()=>{
    console.log(store.getState());

})
// console.log(store.getState());

store.dispatch(buycake(10))
store.dispatch(buyic(40))
store.dispatch(buyic(40))
store.dispatch(restockcake())
store.dispatch(restockic())


// // console.log(store.getState());

// store.dispatch(restockcake())

// // console.log(store.getState());
// un()
// store.dispatch(buycake())

