import { createAction } from 'redux-actions'
import { Actions } from './actions.types'

export const gainXp = createAction(Actions.GAIN_XP);
export const levelUp = createAction(Actions.LEVEL_UP);
export const move = createAction(Actions.MOVE, (x, y) => ({ x, y }));
export const drinkPotion = createAction(Actions.DRINK_POTION);
export const takeDamage = createAction(Actions.TAKE_DAMAGE);