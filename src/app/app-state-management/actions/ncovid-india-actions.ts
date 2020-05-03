import { createAction, props } from '@ngrx/store';
import { ICovidDistrictStateData } from '../../model/covid/india';

export enum nCovidIndiaActionEnum {
    fetchIndiaData = '[Fetch india covid] Fetch India Covid Data',
    addIndiaData = '[Add India covid] Add India Covid Data'
}

export const nCovidFetchIndiaSummaryAction = createAction(nCovidIndiaActionEnum.fetchIndiaData);
export const nCovidAddIndiaSummaryAction = createAction(nCovidIndiaActionEnum.addIndiaData, props<ICovidDistrictStateData>());
