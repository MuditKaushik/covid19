import { nCovidGlobalStateSummary, nCovidWorldReducer } from '../reducers/ncovid-world-reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    GlobalSummaryState: nCovidGlobalStateSummary
};

export const actionReducerMap: ActionReducerMap<IAppState> = {
    GlobalSummaryState: nCovidWorldReducer
};

