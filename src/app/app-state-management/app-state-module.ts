import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './state-model';

@NgModule({
    imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot(actionReducerMap)
    ],
    exports: [StoreModule, EffectsModule]
})
export class AppStateModule { }
