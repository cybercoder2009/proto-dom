import { UI } from './action_ui.js'

const init = {
    modal_signin: true
}

export default function ui(state = init, action){
    switch(action.type){
        case UI: 
            return Object.assign({}, action)
        default: 
            return state
    }
}