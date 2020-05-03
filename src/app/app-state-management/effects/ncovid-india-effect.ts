import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NCovidIndiaService } from '../../core/ncovid-api/india';
import { nCovidAddIndiaSummaryAction, nCovidIndiaActionEnum } from '../actions/ncovid-india-actions';
import { ICovidDistrictStateData } from '../../model/covid/india';

@Injectable()
export class NCovidIndiaEffect {
    indiaStateWiseData = createEffect(() => this.getIndiaCovidDistrictStateInfoAsync, { dispatch: true, useEffectsErrorHandler: true });

    constructor(private ncovidIndia: NCovidIndiaService, private action: Actions) { }

    protected get getIndiaCovidDistrictStateInfoAsync(): Observable<ICovidDistrictStateData | any> {
        return this.action.pipe(
            ofType(nCovidIndiaActionEnum.fetchIndiaData),
            switchMap(() => this.ncovidIndia.getNCovidIndiaAll()),
            map(result => nCovidAddIndiaSummaryAction(result))
        );
    }
}
