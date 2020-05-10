import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import { ICovidCountry, ICovidCountrySummary } from 'src/app/model/covid/world';
import { countriesSelector, summarySelector } from '../../app-state-management/selectors/state-selectors';
import { IAppState } from '../../app-state-management/state-model';
import { CountryIndex, IIndexPosition } from '../../model/covid/filter/alphabets-index';
import { Observable } from 'rxjs';
@Component({
    selector: 'ncovid-global-countries',
    templateUrl: './ncovid-countries-template.html'
})

export class NCovidCountriesComponent {
    countriesSummary: Array<ICovidCountrySummary> = new Array<ICovidCountrySummary>();
    countries: Array<ICovidCountry> = new Array<ICovidCountry>();
    protected countryIndex!: CountryIndex;

    constructor(private ngStore: Store<IAppState>) { }

    get filterAlphabets(): Array<string> {
        if (this.countryIndex) {
            return Object.keys(this.countryIndex.getCountryIndex).map(alphabet => alphabet.toUpperCase());
        }
        return [];
    }

    get fetchCountriesData(): void {
        this.fetchCountrySummary().pipe(
            map(summary => this.countriesSummary = summary),
            tap(() => this.countryIndex = new CountryIndex(this.countriesSummary)),
            switchMap(() => this.ngStore.select(countriesSelector)),
            map(countries => this.countries = countries)
        ).subscribe();
        return;
    }

    getCountryIndex(alphabet: string): void {
        let countryIndex = this.countryIndex.getCountryIndex;
        let alphabetsmall = alphabet.toLowerCase();
        let indexPositions: IIndexPosition;
        if (Object.getOwnPropertyDescriptor(countryIndex, alphabetsmall)) {
            indexPositions = countryIndex[alphabetsmall];
        }
        this.fetchCountrySummary().subscribe((summary) => {
            this.countriesSummary = new Array<ICovidCountrySummary>();
            if (indexPositions) {
                this.countriesSummary = summary.slice(indexPositions.startPos, indexPositions.endPos);
            } else {
                this.countriesSummary = summary;
            }
        });
    }

    protected fetchCountrySummary(): Observable<Array<ICovidCountrySummary>> {
        return this.ngStore.pipe(select(summarySelector))
            .pipe(map(summary => summary.Countries));
    }
}
