import { createAction, props } from '@ngrx/store';
import { ICovidSummary, ICovidCountryList } from '../../model/covid/world';

export enum nCovidWorldActionType {
    fetchGlobalSummary = '[fetch Summary] Fetch Global Summary',
    addGlobalSummary = '[Add Summary] Add Global Summary',
    fetchCountries = '[fetch countries] Fetch Global Countries',
    addCountries = '[Add Countries] Add Global Countries'
}

export const nCovidWorldFetchSummaryAction = createAction(nCovidWorldActionType.fetchGlobalSummary);
export const nCovidWorldFetchCountriesAction = createAction(nCovidWorldActionType.fetchCountries);
export const nCovidWorldAddSummaryAction = createAction(nCovidWorldActionType.addGlobalSummary, props<ICovidSummary>());
export const nCovidWorldAddCountriesAction = createAction(nCovidWorldActionType.addCountries, props<ICovidCountryList>());
