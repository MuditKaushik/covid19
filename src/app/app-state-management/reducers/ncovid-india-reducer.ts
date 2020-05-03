import { createReducer, on, Action } from '@ngrx/store';
import { nCovidAddIndiaSummaryAction, nCovidFetchIndiaSummaryAction, nCovidIndiaActionEnum } from '../actions/ncovid-india-actions';
import { ICovidDistrictStateData } from '../../model/covid/india';

function assignmentCovidIndiaState(oldState: nCovidIndiaState, newState: ICovidDistrictStateData): nCovidIndiaState {
    let state: nCovidIndiaState = {
        stateDistrictInfo: newState
    };
    return Object.assign(oldState, state);
}

export interface nCovidIndiaState {
    stateDistrictInfo: ICovidDistrictStateData
}

export const initialCovidIndiaDistrictState: nCovidIndiaState = {
    stateDistrictInfo: {} as ICovidDistrictStateData
};

const nCovidIndiaReducerHandler = createReducer<nCovidIndiaState>(initialCovidIndiaDistrictState,
    on(nCovidFetchIndiaSummaryAction),
    on(nCovidAddIndiaSummaryAction, (state: nCovidIndiaState, newState: ICovidDistrictStateData) => assignmentCovidIndiaState(state, newState))
);

export function nCovidIndiaReducer(initialState = initialCovidIndiaDistrictState, action: Action) {
    switch (action.type) {
        case nCovidIndiaActionEnum.fetchIndiaData: return nCovidIndiaReducerHandler(initialState, action);
        case nCovidIndiaActionEnum.addIndiaData: return nCovidIndiaReducerHandler(initialState, action);
        default: return initialState;
    }
}
