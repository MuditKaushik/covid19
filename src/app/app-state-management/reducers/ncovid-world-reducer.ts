import { createReducer, on, Action } from '@ngrx/store';
import { nCovidWorldFetchSummaryAction, nCovidWorldAddSummaryAction, nCovidWorldFetchCountriesAction, nCovidWorldAddCountriesAction } from '../actions/ncovid-world-action';
import { ICovidSummary, ICovidCountryList, ICovidCountry } from '../../model/covid/world';

function assignNewGlobalSummaryState(oldState: nCovidGlobalState, newState: ICovidSummary) {
    let newCovidGlobalState: nCovidGlobalState = {
        globalSummary: newState,
        globalCountries: oldState.globalCountries
    };
    return Object.assign<nCovidGlobalState, nCovidGlobalState>(oldState, newCovidGlobalState);
};

function assignNewGlobalCountriesState(oldState: nCovidGlobalState, newState: ICovidCountryList) {
    let newCovidGlobalState: nCovidGlobalState = {
        globalSummary: oldState.globalSummary,
        globalCountries: newState.countries
    }
    return Object.assign(oldState, newCovidGlobalState);
};

export interface nCovidGlobalState {
    globalSummary: ICovidSummary,
    globalCountries: Array<ICovidCountry>
}

const initialGlobalSummaryState: nCovidGlobalState = {
    globalSummary: {} as ICovidSummary,
    globalCountries: []
};

const nCovidWorldReducerActions = createReducer<nCovidGlobalState>(
    initialGlobalSummaryState,
    on(nCovidWorldFetchSummaryAction),
    on(nCovidWorldFetchCountriesAction),
    on(nCovidWorldAddSummaryAction, (state: nCovidGlobalState, newState: ICovidSummary) => assignNewGlobalSummaryState(state, newState)),
    on(nCovidWorldAddCountriesAction, (state: nCovidGlobalState, newState: ICovidCountryList) => assignNewGlobalCountriesState(state, newState))
);

export function nCovidWorldReducer(state = initialGlobalSummaryState, action: Action) {
    switch (action.type) {
        case nCovidWorldFetchSummaryAction.type: return nCovidWorldReducerActions(state, action);
        case nCovidWorldAddSummaryAction.type: return nCovidWorldReducerActions(state, action);
        case nCovidWorldFetchCountriesAction.type: return nCovidWorldReducerActions(state, action)
        case nCovidWorldAddCountriesAction.type: return nCovidWorldReducerActions(state, action)
        default: return initialGlobalSummaryState;
    }
}
