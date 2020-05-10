import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponseHandler } from '../../http-handler/http-response-handler';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICovidCountry, ICovidSummary } from '../../../model/covid/world';

@Injectable()
export class NCovid19WorldHttp {
    constructor(private http: HttpClient) { }
    getWorldCountry(): Observable<Array<ICovidCountry>> {
        return this.http.get<Array<ICovidCountry>>('https://api.covid19api.com/countries', { observe: 'response' })
            .pipe(
                map(response => HttpResponseHandler.fetchResponse(response)),
                catchError(err => HttpResponseHandler.handlerResponseError(err))
            );
    }
    getCovidGlobalSummary(): Observable<ICovidSummary> {
        return this.http.get<ICovidSummary>('https://api.covid19api.com/summary', { observe: 'response' })
            .pipe(
                map(response => HttpResponseHandler.fetchResponse(response)),
                catchError(err => HttpResponseHandler.handlerResponseError(err))
            );
    }
}
