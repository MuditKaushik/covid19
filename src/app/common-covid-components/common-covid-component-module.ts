import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonCovidComponentRoutes } from './common-covid-component-routes';
import { NCovidSummaryComponent } from './summary/ncovid-summary-component';
import { AppPipeModule } from '../app-pipes/app-pipe-module';
import { EffectsModule } from '@ngrx/effects';
import { NCovidWorldEffect } from './effects/ncovic-world-effect';
@NgModule({
    imports: [
        CommonModule,
        CommonCovidComponentRoutes,
        AppPipeModule,
        EffectsModule.forFeature([NCovidWorldEffect])
    ],
    declarations: [NCovidSummaryComponent],
    exports: [NCovidSummaryComponent]
})
export class CommonCovidComponentModule { }
