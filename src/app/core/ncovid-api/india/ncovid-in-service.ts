import { Injectable } from '@angular/core';
import { NCovid19IndiaHttp } from './ncovid-in-http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NCovidIndiaService {
    constructor(private ncovidIndiaHttp: NCovid19IndiaHttp) { }
    getNCovidIndiaAll(): Observable<any> {
        return this.ncovidIndiaHttp.fetchIndiaAll().pipe(map(result => result));
    }
}