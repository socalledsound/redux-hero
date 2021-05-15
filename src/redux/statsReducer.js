import { initialState } from './initalState'
import { Actions } from './actions.types'

export const statsReducer = (state = initialState.hero.stats, action) => {
    let { health, maxHealth } = state;
    switch (action.type) {
      case Actions.DRINK_POTION:
        health = Math.min(health + 20, maxHealth);
        return { ...state, health, maxHealth };
      case Actions.TAKE_DAMAGE:
        health = Math.max(0, health - action.payload);
        return { ...state, health };
        default : 
        return {
            ...state
        }  
    }
  };