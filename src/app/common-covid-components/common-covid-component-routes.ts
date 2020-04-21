import { Routes, RouterModule, Route } from '@angular/router';
import { NCovidSummaryComponent } from './summary/ncovid-summary-component';
import { NgModule } from '@angular/core';

const commonComponentRoutes: Routes = new Array<Route>(
    {
        path: '',
        component: NCovidSummaryComponent
    }
);

@NgModule({
    imports: [RouterModule.forChild(commonComponentRoutes)],
    exports: [RouterModule]
})
export class CommonCovidComponentRoutes { }
