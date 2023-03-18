import { DELETE_PARTNERS_ERROR, DELETE_PARTNERS_LOADING, DELETE_PARTNERS_SUCCESS, GET_PARTNERS_ERROR, GET_PARTNERS_LOADING, GET_PARTNERS_SUCCESS, LOGIN_ADMIN_ERROR, LOGIN_ADMIN_LOADING, LOGIN_ADMIN_SUCCESS, SET_ADMIN_ERROR, SET_ADMIN_LOADING, SET_ADMIN_SUCCESS } from "./actionTypes";

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
                isCreated:false,
                isAuth:false
            }
        case LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false,
                isAuth:payload.error ? false : true
            }
        case LOGIN_ADMIN_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        case DELETE_PARTNERS_LOADING:
            return {
                ...state,                    
                isLoading:true,
                isError:false,
                isCreated:false,
                isAuth:true
            }
        case DELETE_PARTNERS_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false,
                isAuth:true,
                partners:state.partners.filter((partner)=>  partner.partner_email !== payload)
            }
        case DELETE_PARTNERS_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        case GET_PARTNERS_LOADING:
            return {
                ...state,                    
                isLoading:true,
                isError:false,
                isCreated:false,
                isAuth:true
            }
        case GET_PARTNERS_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false,
                isAuth:true,
                partners:[...state.partners,...payload]
            }
        case GET_PARTNERS_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        default:
            return state;
    }
}