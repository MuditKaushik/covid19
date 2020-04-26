import { NCovid19WorldHttp } from './ncovid-world-http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICovidSummary, ICovidCountry } from '../../../model/covid/world';
import { map } from 'rxjs/operators';

@Injectable()
export class NCovidWorldService {
    constructor(private ncovidWorldHttp: NCovid19WorldHttp) { }
    getCountries(): Observable<{ countries: Array<ICovidCountry> }> {
        return this.ncovidWorldHttp.getWorldCountry().pipe(map((globalCountries: Array<ICovidCountry>) => {
            return { countries: globalCountries };
        }));
    }
    getGlobalCovidSummary(): Observable<ICovidSummary> {
        return this.ncovidWorldHttp.getCovidGlobalSummary();
    }
}
