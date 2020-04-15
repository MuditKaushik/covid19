import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CovidComponent } from './app-main-component/covid-component';

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule],
    exports: [BrowserModule],
    declarations: [CovidComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [CovidComponent]
})

export class AppModule { }
