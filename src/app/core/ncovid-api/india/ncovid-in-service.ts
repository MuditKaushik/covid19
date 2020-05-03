import { Injectable } from '@angular/core';
import { NCovid19IndiaHttp } from './ncovid-in-http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICovidDistrictStateData } from '../../../model/covid/india';

@Injectable()
export class NCovidIndiaService {
    constructor(private ncovidIndiaHttp: NCovid19IndiaHttp) { }
    getNCovidIndiaAll(): Observable<ICovidDistrictStateData> {
        return this.ncovidIndiaHttp.fetchIndiaAll().pipe(map(result => result));
    }
}
