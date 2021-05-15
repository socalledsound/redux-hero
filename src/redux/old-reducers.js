import { Actions } from './actions.types'
  

  
//
  //  Reducers
  //
  export const xpReducer = (state = initialState.xp, action) => {
    switch (action.type) {
      case Actions.GAIN_XP:
        return state + action.payload; 
      default : 
        return state
    
    }
    
  };
  export const levelReducer = (state = 1, action) => {
    switch (action.type) {
      case Actions.LEVEL_UP:
        return state + 1;
      default : 
        return state
    
    }
  
  };
  export const positionReducer = (state = initialState.position, action) => {
    switch (action.type) {
      case Actions.MOVE:
        let { x, y } = action.payload;
        x += state.x;
        y += state.y;
        return { x, y };
      default : 
        return state
    }
    
  };
  export const statsReducer = (state = initialState.stats, action) => {
    let { health, maxHealth } = state;
    switch (action.type) {
      case Actions.DRINK_POTION:
        health = Math.min(health + 20, maxHealth);
        return { ...state, health, maxHealth };
      case Actions.TAKE_DAMAGE:
        health = Math.max(0, health - action.payload);
        return { ...state, health };
      default : 
        return state
    
    }
    
  };
  export const inventoryReducer = (state = initialState.inventory, action) => {
    let { potions } = state;
    switch (action.type) {
      case Actions.DRINK_POTION:
        potions = Math.max(0, potions - 1);
        return { ...state, potions };
        default : 
        return state
    
    }
    
  };