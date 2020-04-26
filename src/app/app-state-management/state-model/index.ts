import { nCovidGlobalState, nCovidWorldReducer } from '../reducers/ncovid-world-reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    GlobalState: nCovidGlobalState,
};

export const actionReducerMap: ActionReducerMap<IAppState> = {
    GlobalState: nCovidWorldReducer
};
