import { USER } from './action_user.js'

const init = {
    email: '',
    name: ''
}

export default function user(state = init, action){
    switch(action.type){
        case USER: 
            return Object.assign({}, action)
        default: 
            return state
    }
}