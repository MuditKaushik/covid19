import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { nCovidWorldFetchSummaryAction, nCovidWorldFetchCountriesAction } from '../app-state-management/actions/ncovid-world-action';
import { IAppState } from '../app-state-management/state-model';

@Component({
    selector: 'covid-component',
    templateUrl: './covid-template.html'
})
export class CovidComponent {
    constructor(private ngStore: Store<IAppState>) {
        this.ngStore.dispatch(nCovidWorldFetchSummaryAction());
        this.ngStore.dispatch(nCovidWorldFetchCountriesAction());
    }
}
