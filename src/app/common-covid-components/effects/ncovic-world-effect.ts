import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { nCovidWorldActionType, nCovidWorldAddSummaryAction } from '../../app-state-management/actions/ncovid-world-action';
import { ICovidSummary } from '../../model/covid/world';
import { NCovid19WorldHttp } from '../../core/ncovid-api/world/ncovid-world-http';

@Injectable()
export class NCovidWorldEffect {
    constructor(private ncovidWorldHttp: NCovid19WorldHttp, private asyncAction: Actions) {
        this.getGlobalCovidSummary;
    }
    get getGlobalCovidSummary(): Observable<ICovidSummary | any> {
        let actionAsync = this.asyncAction.pipe(
            ofType(nCovidWorldActionType.fetchGlobalSummary),
            switchMap((result) => {
                console.log(result);
                return this.ncovidWorldHttp.getCovidGlobalSummary()
            }),
            map(summary => nCovidWorldAddSummaryAction(summary))
        );
        return createEffect(() => actionAsync, { useEffectsErrorHandler: true, dispatch: true });
    }
}
