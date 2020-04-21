import { Component } from '@angular/core';
import { nCovidWorldFetchSummaryAction } from '../app-state-management/actions/ncovid-world-action';
import { IAppState } from '../app-state-management/state-model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'covid-component',
    templateUrl: './covid-template.html'
})
export class CovidComponent {
    constructor(private store: Store<IAppState>) {
        this.store.dispatch(nCovidWorldFetchSummaryAction());
    }
}
