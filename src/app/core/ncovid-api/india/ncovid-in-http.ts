import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpResponseHandler } from '../../http-handler/http-response-handler';

@Injectable()
export class NCovid19IndiaHttp {
    constructor(private http: HttpClient) { }
    fetchIndiaAll(): Observable<any> {
        return this.http.get<any>('https://api.covid19india.org/data.json', { observe: 'response' }).pipe(
            map(response => HttpResponseHandler.fetchResponse(response)),
            catchError(err => HttpResponseHandler.handlerResponseError(err))
        );
    }
}
