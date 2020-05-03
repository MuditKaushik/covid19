import { nCovidGlobalState, nCovidWorldReducer } from '../reducers/ncovid-world-reducer';
import { nCovidIndiaReducer, nCovidIndiaState } from '../reducers/ncovid-india-reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    GlobalState: nCovidGlobalState,
    IndiaState: nCovidIndiaState
};

export const actionReducerMap: ActionReducerMap<IAppState> = {
    GlobalState: nCovidWorldReducer,
    IndiaState: nCovidIndiaReducer
};
