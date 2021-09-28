import { LOADING, GET_CITIES,GET_WEATHER } from "./Action";

const initialState={
    cities:[],
    weather:[],
    loading:""
}

export const reducer=(state={...initialState},action)=>{
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading:action.payload
            }
        case GET_CITIES:
            return{
                ...state,
                cities:action.payload
            }
        case GET_WEATHER:
            return{
                ...state,
                weather:action.payload
            }
        default:
            return state;
    }
}