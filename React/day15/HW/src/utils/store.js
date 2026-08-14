import { createStore } from "redux";

 export function additem(d){
    return{
        type:"additem",
        payload:d
    }

}
const initialliststate={
    data :[

    ]
}

const listReducer=(state=initialliststate,action)=>{
    switch(action.type)
    {
        case "additem":
            return{
                data:[...state.data,action.payload ]
            }

            default:
                return state
    }
}

export const store = createStore(listReducer);