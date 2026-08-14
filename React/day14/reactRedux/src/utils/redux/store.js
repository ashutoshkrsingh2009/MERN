import {createStore} from "redux"



export function buycake(q){
    return{
        type:"buycake",
        payload : q || 1
    }
}

export function restockcake(){
    return{
        type:"restockcake"
    }
}

const initialcakestate={
    numberofcake:20
}

const cakeReducer=(state=initialcakestate,action)=>{
    switch(action.type)
    {   
        case "buycake":
            if(action.payload>state.numberofcake)return state
            return{
               numberofcake:state.numberofcake-action.payload 
            }
            case "restockcake":
                return{
                    numberofcake:20
                }
                default:
                    return state
    }
    
}
 export const Store= createStore(cakeReducer)
Store.subscribe(()=>{
    console.log(Store.getState()); 
})
Store.dispatch(buycake())
Store.dispatch(buycake())
Store.dispatch(buycake())
Store.dispatch(buycake())
Store.dispatch(restockcake())

