import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { AppPipeModule } from '../app-pipes/app-pipe-module';
import { CommonCovidComponentRoutes } from './common-covid-component-routes';
import { NCovidSummaryComponent } from './summary/ncovid-summary-component';
import { NCovidCountriesComponent } from './world/ncovid-countries-component';

@NgModule({
    imports: [
        CommonModule,
        CommonCovidComponentRoutes,
        AppPipeModule,
        TranslocoModule
    ],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: 'i18n'
        }
    ],
    declarations: [NCovidSummaryComponent, NCovidCountriesComponent],
    exports: [NCovidSummaryComponent]
})
export class CommonCovidComponentModule { }
