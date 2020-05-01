import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslocoService } from '@ngneat/transloco';
import { nCovidWorldFetchSummaryAction, nCovidWorldFetchCountriesAction } from '../app-state-management/actions/ncovid-world-action';
import { IAppState } from '../app-state-management/state-model';
import { I18nLang, languageSupport } from '../app-i18n/language';
@Component({
    selector: 'covid-component',
    templateUrl: './covid-template.html'
})
export class CovidComponent {
    languages: Array<I18nLang> = languageSupport;
    selectedLang: string = 'en';
    constructor(
        private ngStore: Store<IAppState>,
        private translocoService: TranslocoService,
    ) {
        this.ngStore.dispatch(nCovidWorldFetchSummaryAction());
        this.ngStore.dispatch(nCovidWorldFetchCountriesAction());
    }
    changeLanguage(): void {
        this.translocoService.setActiveLang(this.selectedLang);
    }
}
