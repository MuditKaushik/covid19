import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = new Array<Route>(
    {
        path: 'summary',
        loadChildren: () => import('./common-covid-components/common-covid-component-module')
        .then(commonComponent => commonComponent.CommonCovidComponentModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/summary'
    }
);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouteModule { }
