import { IAppState } from '../state-model';
import { createSelector } from '@ngrx/store';

export const GlobalSummary = (appState: IAppState) => appState.GlobalSummaryState;
export const summarySelector = createSelector(GlobalSummary, (selectorState) => selectorState.globalSummary);
