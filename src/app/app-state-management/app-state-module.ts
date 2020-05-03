import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './state-model';
import { NCovidWorldEffect, NCovidIndiaEffect } from './effects';
@NgModule({
    imports: [
        EffectsModule.forRoot([NCovidWorldEffect, NCovidIndiaEffect]),
        StoreModule.forRoot(actionReducerMap)
    ],
    providers: [NCovidWorldEffect, NCovidIndiaEffect],
    exports: [StoreModule, EffectsModule]
})
export class AppStateModule { }
