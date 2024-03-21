import { createReducer, on } from '@ngrx/store';

import { increment } from './counter.action';

const initialState = 0;

/**
 * used to create reducer
 */
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

/**
 * function to create a reducer used in more ancient versions
 * @param state
 * @returns state
 */
// export function counterReducer(state = initialState){
//     return state;
// }
