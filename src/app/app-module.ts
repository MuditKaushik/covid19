import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CovidComponent } from './app-main-component/covid-component';
import { AppRouteModule } from './app-router';
import { AppStateModule } from './app-state-management/app-state-module';
import { CoreModule } from './core/core-module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CoreModule,
        AppRouteModule,
        AppStateModule
    ],
    exports: [BrowserModule],
    declarations: [CovidComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [CovidComponent]
})

export class AppModule { }
