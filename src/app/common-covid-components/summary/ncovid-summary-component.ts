import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICovidCountrySummary, ICovidGlobalSummary, ICovidSummary } from '../../model/covid/world';
import { BinarySearchPipe } from '../../app-pipes/algo-pipe/binary-search-pipe';
import { IAppState } from '../../app-state-management/state-model';
import { summarySelector } from '../../app-state-management/selectors/state-selectors';

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
        this.ngStore.select(summarySelector).subscribe((summary: ICovidSummary) => {
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
