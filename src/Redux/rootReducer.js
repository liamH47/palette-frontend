import { combineReducers } from 'redux'

const defaultState = {
    currentPalettes: []
}

function palettesReducer(state = defaultState.currentPalettes, action){
    switch (action.type) {
        case "SET_PALETTE":
            return state
        default:
            return state
    }
    
}


const rootReducer = combineReducers({
    currentPalettes: palettesReducer
})

export default rootReducer