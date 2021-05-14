import { createStore, combineReducers } from 'redux'
import { xpReducer, levelReducer, positionReducer, statsReducer, inventoryReducer } from './reducers'
  
const rootReducer = combineReducers({
    xp: xpReducer,
    level: levelReducer,
    position: positionReducer,
    stats: statsReducer,
    inventory: inventoryReducer,
})

export const store = createStore(rootReducer)