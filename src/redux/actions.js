import { Actions } from './actions.types'
//  Action Creators
  //
  export const gainXp = (xp) => ({
    type: Actions.GAIN_XP,
    payload: xp
  });
  export const levelUp = () => ({
    type: Actions.LEVEL_UP
  });
  export const move = (x, y) => ({
    type: Actions.MOVE,
    payload: { x, y }
  });
  export const drinkPotion = () => ({
    type: Actions.DRINK_POTION
  });
  export const takeDamage = (amount) => ({
    type: Actions.TAKE_DAMAGE,
    payload: amount
  });