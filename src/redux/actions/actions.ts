import { SET_TRANSACTIONS, SET_ERRORS, CLEAR_ERRORS} from '../types'
import axios from 'utils/axios';
import { ITransaction } from 'types';
let txs: ITransaction[] = [];

//for fetching and filter transactions information
export const fetchTransactions = () => (dispatch: any) => {
  
  axios.get(`/api`)
    .then(res => {
      txs.unshift(res.data);

      dispatch({
        type: SET_TRANSACTIONS,
        payload: { 
          results: txs
        }
      });

      dispatch({ type: CLEAR_ERRORS });

    }).catch(err => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: {errors: err.response.data}
      });
      dispatch({
        type: SET_TRANSACTIONS,
        payload: { 
          results: []
        }
      });
    });
}
