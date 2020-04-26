import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../app-state-management/state-model';
import { countriesSelector } from '../../app-state-management/selectors/state-selectors';

@Component({
    selector: 'ncovid-global-countries',
    templateUrl: './ncovid-countries-template.html'
})

export class NCovidCountriesComponent {
    constructor(private ngStore: Store<IAppState>) {
        this.ngStore.pipe(select(countriesSelector));
    }

}
