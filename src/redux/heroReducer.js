import { initialState } from './initalState'
import { Actions } from './actions.types'
import { statsReducer } from './statsReducer'
import { inventoryReducer } from './inventoryReducer'

export const heroReducer = (state = initialState.hero, action) => {
    const { stats, inventory } = state;
    
    switch (action.type) {
      case Actions.GAIN_XP:
        const xp = state.xp + action.payload;
        return { ...state, xp };
      case Actions.LEVEL_UP:
        const level = state.level + 1;
        return { ...state, level };
      case Actions.MOVE:
        let { position: { x, y } } = state;
        x += action.payload.x;
        y += action.payload.y;
        return { ...state, position: { x, y } };
      case Actions.DRINK_POTION:
        return {
          ...state,
          stats: statsReducer(stats, action),
          inventory: inventoryReducer(inventory, action)
        };
      case Actions.TAKE_DAMAGE:
        return {
          ...state,
          stats: statsReducer(stats, action)
        };
      default : 
        return {
            ...state
        }  
    }
    
  };