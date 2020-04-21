import { createReducer, on, Action } from '@ngrx/store';
import { nCovidWorldFetchSummaryAction, nCovidWorldAddSummaryAction } from '../actions/ncovid-world-action';
import { ICovidSummary } from '../../model/covid/world';

function assignNewGlobalSummaryState(oldState: nCovidGlobalStateSummary, newState: ICovidSummary) {
    let newCovidSummary: nCovidGlobalStateSummary = {
        globalSummary: newState
    };
    return Object.assign<nCovidGlobalStateSummary, nCovidGlobalStateSummary>(oldState, newCovidSummary);
};

export interface nCovidGlobalStateSummary {
    globalSummary: ICovidSummary
}

const initialGlobalSummaryState: nCovidGlobalStateSummary = {
    globalSummary: {} as ICovidSummary
};

const nCovidWorldFetchSummaryReducer = createReducer<nCovidGlobalStateSummary>(
    initialGlobalSummaryState,
    on(nCovidWorldFetchSummaryAction),
    on(nCovidWorldAddSummaryAction, (state: nCovidGlobalStateSummary, newState: ICovidSummary) => assignNewGlobalSummaryState(state, newState))
);

export function nCovidWorldReducer(state = initialGlobalSummaryState, action: Action) {
    switch (action.type) {
        case nCovidWorldFetchSummaryAction.type: return nCovidWorldFetchSummaryReducer(state, action);
        case nCovidWorldAddSummaryAction.type: return nCovidWorldFetchSummaryReducer(state, action);
        default: return initialGlobalSummaryState;
    }
}
