import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, exhaustMap } from 'rxjs/operators';
import { NCovid19WorldHttp } from '../../core/ncovid-api/world/ncovid-world-http';
import { ICovidSummary } from '../../model/covid/world';
import { nCovidWorldActionType, nCovidWorldAddSummaryAction } from '../actions/ncovid-world-action';

@Injectable()
export class NCovidWorldEffect {
    globalSummary = createEffect(() => this.getGlobalCovidSummaryAsync, { useEffectsErrorHandler: true, dispatch: true });

    constructor(private ncovidWorldHttp: NCovid19WorldHttp, private asyncAction: Actions) { }

    private get getGlobalCovidSummaryAsync(): Observable<ICovidSummary | any> {
        return this.asyncAction.pipe(
            ofType(nCovidWorldActionType.fetchGlobalSummary),
            exhaustMap(
                () => this.ncovidWorldHttp.getCovidGlobalSummary().pipe(
                    map(summary => nCovidWorldAddSummaryAction(summary))
                )
            )
        );
    }
}
