import { initialState } from './initalState'
import { Actions } from './actions.types'

export const inventoryReducer = (state = initialState.hero.inventory, action) => {
    let { potions } = state;
    switch (action.type) {
      case Actions.DRINK_POTION:
        potions = Math.max(0, potions - 1);
        return { ...state, potions };
        default : 
        return {
            ...state
        } 
      }
  }