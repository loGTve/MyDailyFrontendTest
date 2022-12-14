


const reducer = (state, action) => {
    let newState = [];
    switch(action.type){
        case "INIT" : {
            return action.data;
        }
    case "CREATE" : {
        // const newItem = { ...action.data };
        newState = [action.data, ...state]; // 변경될 값
        break;
    }
    case "REMOVE" : {
        newState = state.filter((it)=>it.id !== action.targetId);
        break;
    }
    case "EDIT" : {
        newState = state.map((it)=>it.id === action.data.id ? {...action.data} : it);
        break;
    }
    default:
        return state;
    }
    return newState;
};