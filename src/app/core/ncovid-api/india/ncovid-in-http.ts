import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpResponseHandler } from '../../http-handler/http-response-handler';
import { ICovidDistrictStateData } from '../../../model/covid/india';

@Injectable()
export class NCovid19IndiaHttp {
    constructor(private http: HttpClient) { }
    fetchIndiaAll(): Observable<ICovidDistrictStateData> {
        return this.http.get<ICovidDistrictStateData>('/covid19india/state_district_wise.json', { observe: 'response' }).pipe(
            map(response => HttpResponseHandler.fetchResponse(response)),
            catchError(err => HttpResponseHandler.handlerResponseError(err))
        );
    }
}
