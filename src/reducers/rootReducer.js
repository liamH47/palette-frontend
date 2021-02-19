import { combineReducers } from 'redux'

const defaultState = { 
    palettes: []
}

function palettesReducer(state = defaultState.palettes, action){
    switch (action.type) {
        case 'GET_PALETTES':
            return action.payload
        default:
            break;
    }
}

const rootReducer = combineReducers({

})

export default rootReducer