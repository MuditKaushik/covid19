import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { ICovidCountry, ICovidCountrySummary } from 'src/app/model/covid/world';
import { countriesSelector, summarySelector } from '../../app-state-management/selectors/state-selectors';
import { IAppState } from '../../app-state-management/state-model';

@Component({
    selector: 'ncovid-global-countries',
    templateUrl: './ncovid-countries-template.html'
})

export class NCovidCountriesComponent {
    countriesSummary: Array<ICovidCountrySummary> = new Array<ICovidCountrySummary>();
    countries: Array<ICovidCountry> = new Array<ICovidCountry>();

    constructor(private ngStore: Store<IAppState>) {
        this.ngStore.pipe(select(summarySelector)).pipe(
            map((summary) => this.countriesSummary = summary.Countries),
            switchMap(() => this.ngStore.select(countriesSelector)),
            map(countries => this.countries = countries)
        ).subscribe();
    }
}
