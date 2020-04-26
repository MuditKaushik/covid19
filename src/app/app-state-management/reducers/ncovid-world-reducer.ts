import { createReducer, on, Action } from '@ngrx/store';
import { nCovidWorldFetchSummaryAction, nCovidWorldAddSummaryAction, nCovidWorldFetchCountriesAction, nCovidWorldAddCountriesAction } from '../actions/ncovid-world-action';
import { ICovidSummary, ICovidCountry } from '../../model/covid/world';

function assignNewGlobalSummaryState(oldState: nCovidGlobalState, newState: ICovidSummary) {
    let newCovidGlobalState: nCovidGlobalState = {
        globalSummary: newState,
        countries: oldState.countries
    };
    return Object.assign<nCovidGlobalState, nCovidGlobalState>(oldState, newCovidGlobalState);
};

function assignNewGlobalCountriesState(oldState: nCovidGlobalState, newState: Array<ICovidCountry>) {
    let newCovidGlobalState: nCovidGlobalState = {
        globalSummary: oldState.globalSummary,
        countries: newState
    }
    return Object.assign(oldState, newCovidGlobalState);
};

export interface nCovidGlobalState {
    globalSummary: ICovidSummary,
    countries: Array<ICovidCountry>
}

const initialGlobalSummaryState: nCovidGlobalState = {
    globalSummary: {} as ICovidSummary,
    countries: []
};

const nCovidWorldReducerActions = createReducer<nCovidGlobalState>(
    initialGlobalSummaryState,
    on(nCovidWorldFetchSummaryAction),
    on(nCovidWorldFetchCountriesAction),
    on(nCovidWorldAddSummaryAction, (state: nCovidGlobalState, newState: ICovidSummary) => assignNewGlobalSummaryState(state, newState)),
    on(nCovidWorldAddCountriesAction, (state: nCovidGlobalState, newState: { countries: Array<ICovidCountry> }) => assignNewGlobalCountriesState(state, newState.countries))
);

export function nCovidWorldReducer(state = initialGlobalSummaryState, action: Action) {
    switch (action.type) {
        case nCovidWorldFetchSummaryAction.type: return nCovidWorldReducerActions(state, action);
        case nCovidWorldAddSummaryAction.type: return nCovidWorldReducerActions(state, action);
        case nCovidWorldFetchCountriesAction.type: return nCovidWorldReducerActions(state, action)
        default: return initialGlobalSummaryState;
    }
}
