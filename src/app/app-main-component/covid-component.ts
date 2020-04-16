import { Component } from '@angular/core';
import { NCovidIndiaService } from '../core/ncovid-api/india';
import { IMessage } from '../model/message';

@Component({
    selector: 'covid-component',
    templateUrl: './covid-template.html'
})
export class CovidComponent {
    constructor(private covidIndiaService: NCovidIndiaService) {
        this.fetchCovidData();
    }
    fetchCovidData(): void {
        this.covidIndiaService.getNCovidIndiaAll().subscribe((covid) => {
            console.log(covid);
        }, (err: IMessage) => {
            console.log(err);
        });
    }
}
