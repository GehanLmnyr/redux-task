import {combineReducers} from 'redux'

const  userReducers = (state ={}, action) => {

    switch (action.type) {
        case 'USERS': {
            return {
                ...state,                               
                list: action.payload
            }
        }                 
        case "USER_DETILAS": {
            return {
                ...state,
                list: action.payload
            }
        }
        case "USER_POST": {
            return {
                ...state,
               
            }
        }
        default: {
            return state
        }
    }

}

export default combineReducers({
    userReducers
})