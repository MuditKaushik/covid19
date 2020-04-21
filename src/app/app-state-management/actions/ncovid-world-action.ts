import { createAction, props } from '@ngrx/store';
import { ICovidSummary } from '../../model/covid/world';

export enum nCovidWorldActionType {
    fetchGlobalSummary = '[fetch Summary] Fetch Global Summary',
    addGlobalSummary = '[Add Summary] Add Global Summary'
}

export const nCovidWorldFetchSummaryAction = createAction(nCovidWorldActionType.fetchGlobalSummary);
export const nCovidWorldAddSummaryAction = createAction(nCovidWorldActionType.addGlobalSummary, props<ICovidSummary>());
