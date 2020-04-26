import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';
import { BinarySearchPipe } from '../../app-pipes/algo-pipe/binary-search-pipe';
import { summarySelector } from '../../app-state-management/selectors/state-selectors';
import { IAppState } from '../../app-state-management/state-model';
import { ICovidCountrySummary, ICovidGlobalSummary, ICovidSummary } from '../../model/covid/world';

@Component({
    selector: 'ncovid-summary',
    templateUrl: './ncovid-summary-template.html'
})
export class NCovidSummaryComponent {
    globalCovidSummary: ICovidGlobalSummary = {} as ICovidGlobalSummary;
    indiaCovidSummay: ICovidCountrySummary = {} as ICovidCountrySummary;
    countryCount: number = 0;
    tillDate: Date = new Date();

    constructor(private ngStore: Store<IAppState>) {
        of([]).pipe(
            delay(3000),
            switchMap(() => this.ngStore.pipe(select(summarySelector)))
        ).subscribe((summary: ICovidSummary) => {
            this.globalCovidSummary = summary.Global;
            this.countryCount = summary.Countries.length;
            this.tillDate = new Date(summary.Date);
            let indiaSummary = new BinarySearchPipe().binarySearch<ICovidCountrySummary | null>(summary.Countries, 'Country', 'India', true);
            if (indiaSummary) {
                this.indiaCovidSummay = indiaSummary;
            }
        });
    }
}
