import { AppDispatch, AppThunk } from "../../interfaces/store";
import {
  discrement as discrementReducer,
  increment as incrementReducer,
  reset as resetReducer,
} from "../ducks/counter";

export const increment = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(incrementReducer());
};
export const discrement = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(discrementReducer());
};
export const reset = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(resetReducer());
};
