import { NCovid19WorldHttp } from './ncovid-world-http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICovidSummary } from '../../../model/covid/world';

@Injectable()
export class NCovidWorldService {
    constructor(private ncovidWorldHttp: NCovid19WorldHttp) { }
    getCountries(): Observable<any> {
        return this.ncovidWorldHttp.getWorldCountry();
    }
    getGlobalCovidSummary(): Observable<ICovidSummary> {
        return this.ncovidWorldHttp.getCovidGlobalSummary();
    }
}
