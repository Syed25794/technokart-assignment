import { LOGIN_ADMIN_ERROR, LOGIN_ADMIN_LOADING, LOGIN_ADMIN_SUCCESS, SET_ADMIN_ERROR, SET_ADMIN_LOADING, SET_ADMIN_SUCCESS } from "./actionTypes";

const initState={
    partners:[],
    isLoading:false,
    isError:false,
    isAuth:false,
    events:[],
    isCreated:false
}

export const reducer = ( state = initState , action )=>{
    const { type, payload }=action;
    console.log(type,payload);
    switch(type){
        case SET_ADMIN_LOADING:
            return {
                ...state,
                isLoading:true,
                isError:false,
                isCreated:false
            }
        case SET_ADMIN_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false
            }
        case SET_ADMIN_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false
            }
        case LOGIN_ADMIN_LOADING:
            return {
                ...state,                    
                isLoading:true,
                isError:false,
                isCreated:false
            }
        case LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false
            }
        case LOGIN_ADMIN_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false
            }
        default:
            return state;
    }
}