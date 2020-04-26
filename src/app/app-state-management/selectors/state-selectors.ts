import { IAppState } from '../state-model';
import { createSelector } from '@ngrx/store';

export const GlobalState = (appState: IAppState) => appState.GlobalState;
export const summarySelector = createSelector(GlobalState, (selectorState) => selectorState.globalSummary);
export const countriesSelector = createSelector(GlobalState, (selectorState) => selectorState.globalCountries);
