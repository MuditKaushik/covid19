import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './state-model';
import { NCovidWorldEffect } from './effects/ncovic-world-effect';
@NgModule({
    imports: [
        EffectsModule.forRoot([NCovidWorldEffect]),
        StoreModule.forRoot(actionReducerMap)
    ],
    providers: [NCovidWorldEffect],
    exports: [StoreModule, EffectsModule]
})
export class AppStateModule { }
