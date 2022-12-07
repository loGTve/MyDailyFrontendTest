import {useEffect, useReducer} from "react";


export function SaveToLocal () {
    const [data, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        const myItem = JSON.parse(localStorage.getItem("myWords"));
    })
}


const reducer = (state, action) => {
    let newState = [];
    switch(action.type){
        case "INIT" : {
            return action.data;
        }
        case "CREATE" : {
            newState = [action.data, ...state];
            break;
        }
        case "REMOVE" : {
            newState = state.filter((it) => it.id !== action.targetId);
            break;
        }
        case "EDIT" : {
            newState = state.map((it) => it.id === action.data.id ? {...action.data} : it);
            break;
        }
        default:
            return state;
    }
}