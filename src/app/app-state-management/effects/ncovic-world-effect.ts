import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, exhaustMap } from 'rxjs/operators';
import { NCovidWorldService } from '../../core/ncovid-api/world/ncovid-world-service';
import { ICovidSummary, ICovidCountry } from '../../model/covid/world';
import { nCovidWorldActionType, nCovidWorldAddSummaryAction, nCovidWorldAddCountriesAction } from '../actions/ncovid-world-action';

@Injectable()
export class NCovidWorldEffect {
    globalSummary = createEffect(() => this.getGlobalCovidSummaryAsync, { useEffectsErrorHandler: true, dispatch: true });
    globalCountries = createEffect(() => this.getGlobalCountriesAsync, { useEffectsErrorHandler: true, dispatch: true });

    constructor(private ncovidWorldService: NCovidWorldService, private asyncAction: Actions) { }

    private get getGlobalCovidSummaryAsync(): Observable<ICovidSummary | any> {
        return this.asyncAction.pipe(
            ofType(nCovidWorldActionType.fetchGlobalSummary),
            exhaustMap(
                () => this.ncovidWorldService.getGlobalCovidSummary().pipe(
                    map(summary => nCovidWorldAddSummaryAction(summary))
                )
            )
        );
    }

    private get getGlobalCountriesAsync(): Observable<Array<ICovidCountry> | any> {
        return this.asyncAction.pipe(
            ofType(nCovidWorldActionType.fetchCountries),
            exhaustMap(
                () => this.ncovidWorldService.getCountries().pipe(
                    map(countries => nCovidWorldAddCountriesAction(countries))
                )
            ));
    }
}
