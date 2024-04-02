import { ICounter } from "./counter";

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type IReduxState = {
    counter: ICounter
}