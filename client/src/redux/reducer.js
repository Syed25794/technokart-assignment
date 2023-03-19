import { ADD_EVENT_ERROR, ADD_EVENT_LOADING, ADD_EVENT_SUCCESS, ADD_PARTNERS_ERROR, ADD_PARTNERS_LOADING, ADD_PARTNERS_SUCCESS, DELETE_PARTNERS_ERROR, DELETE_PARTNERS_LOADING, DELETE_PARTNERS_SUCCESS, EDIT_PARTNERS_ERROR, EDIT_PARTNERS_LOADING, EDIT_PARTNERS_SUCCESS, GET_PARTNERS_ERROR, GET_PARTNERS_LOADING, GET_PARTNERS_SUCCESS, LOGIN_ADMIN_ERROR, LOGIN_ADMIN_LOADING, LOGIN_ADMIN_SUCCESS, SEND_OTP_ERROR, SEND_OTP_LOADING, SEND_OTP_SUCCESS, SET_ADMIN_ERROR, SET_ADMIN_LOADING, SET_ADMIN_SUCCESS, SET_OTP_EMPTY, SET_PARTNER_NAME } from "./actionTypes";

const initState={
    partners:[],
    isLoading:false,
    isError:false,
    isAuth:false,
    events:[],
    isCreated:false,
    otp:0,
    login_link:"",
    email:"",
    name:""
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
                partners:[...payload]
            }
        case GET_PARTNERS_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        case ADD_PARTNERS_LOADING:
            return {
                ...state,                    
                isLoading:true,
                isError:false,
                isCreated:false,
                isAuth:true
            }
        case ADD_PARTNERS_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false,
                isAuth:true,
                partners:[...state.partners,payload]
            }
        case ADD_PARTNERS_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        case EDIT_PARTNERS_LOADING:
            return {
                ...state,                    
                isLoading:true,
                isError:false,
                isCreated:false,
                isAuth:true
            }
        case EDIT_PARTNERS_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false,
                isAuth:true,
                partners:[...state.partners,payload[0]]
            }
        case EDIT_PARTNERS_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        case SEND_OTP_LOADING:
            return {
                ...state,                    
                isLoading:true,
                isError:false,
                isCreated:false,
                isAuth:true
            }
        case SEND_OTP_SUCCESS:
            return {
                ...state,
                isCreated:true,
                isLoading:false,
                isError:false,
                isAuth:true,
                otp:payload.otp,
                login_link:payload.login_link,
                email:payload.email
            }
        case SET_OTP_EMPTY:
            return {
                ...state,
                otp:0,
                login_link:""
            }
        case SEND_OTP_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false,
                isCreated:false,
                isAuth:false
            }
        case SET_PARTNER_NAME:
            return {
                ...state,
                name:payload
            }
        case ADD_EVENT_LOADING:
            return {
                ...state,
                isLoading:true,
                isCreated:false,
                isError:false
            }
        case ADD_EVENT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isCreated:true,
                isError:false
            }
        case ADD_EVENT_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true,
                isCreated:false
            }
        default:
            return state;
    }
}