import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = new Array<Route>(
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
    }
);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouteModule { }
