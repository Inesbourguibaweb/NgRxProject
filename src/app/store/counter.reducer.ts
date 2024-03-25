import { createReducer, on } from '@ngrx/store';

import { increment } from './counter.action';

const initialState = 0;

/**
 * used to create reducer
 */
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
);

/**
 * function to create a reducer used in more ancient versions
 * @param state
 * @returns state
 */
// export function counterReducer(state = initialState, action: any) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value;
//   }
//   return state;
// }
