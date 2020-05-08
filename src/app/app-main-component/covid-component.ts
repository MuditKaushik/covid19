import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslocoService } from '@ngneat/transloco';
import { nCovidWorldFetchSummaryAction, nCovidWorldFetchCountriesAction } from '../app-state-management/actions/ncovid-world-action';
import { nCovidFetchIndiaSummaryAction } from '../app-state-management/actions/ncovid-india-actions';
import { IAppState } from '../app-state-management/state-model';
import { SvgIcons } from '../model/covid/icons';
import { I18nLang, supportLanguageList } from '../app-i18n/language';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
    selector: 'covid-component',
    templateUrl: './covid-template.html'
})
export class CovidComponent {
    languages: Array<I18nLang> = supportLanguageList;

    constructor(
        private ngStore: Store<IAppState>,
        private translocoService: TranslocoService,
        public svgIcons: SvgIcons
    ) {
        of([]).pipe(
            map(() => this.fetchGlobalCovidCountrySummary())
        ).subscribe();
    }
    changeLanguage(langCode: string): void {
        this.translocoService.setActiveLang(langCode);
    }
    protected fetchGlobalCovidCountrySummary(): void {
        this.ngStore.dispatch(nCovidWorldFetchSummaryAction());
        this.ngStore.dispatch(nCovidWorldFetchCountriesAction());
        this.ngStore.dispatch(nCovidFetchIndiaSummaryAction());
    }
}
