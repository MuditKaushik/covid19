import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPipeModule } from '../app-pipes/app-pipe-module';
import { CommonCovidComponentRoutes } from './common-covid-component-routes';
import { NCovidSummaryComponent } from './summary/ncovid-summary-component';

@NgModule({
    imports: [
        CommonModule,
        CommonCovidComponentRoutes,
        AppPipeModule
    ],
    declarations: [NCovidSummaryComponent],
    exports: [NCovidSummaryComponent]
})
export class CommonCovidComponentModule { }
