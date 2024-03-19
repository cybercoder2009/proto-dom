/* ui */
const UI = {draw_open: false}
export const ui_reducer = (state = UI, action) => {
    switch(action.type){
        case 'UI': return {...action.payload}
        default: return state
    }
}
export const ui_action = payload => {return {type: 'UI', payload}}

/* user */
const USER = {email:'',token:''}
export const user_reducer = (state = USER, action) => {
    switch(action.type){
        case 'USER_SET': return {...action.payload}
        case 'USER_CLEAR': return {...USER}
        default: return state
    }
}
export const user_set = payload => {return {type: 'USER_SET', payload}}
export const user_clear = _ => {return {type: 'USER_CLEAR'}}