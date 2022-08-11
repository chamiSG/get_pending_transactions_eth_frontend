import { SET_TRANSACTIONS } from '../types'
const initialState = {
  info: {},
  results: [],
  loading: true
}
export default function transactionsReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}
