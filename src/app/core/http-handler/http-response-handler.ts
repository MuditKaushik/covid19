import { Observable, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IMessage } from '../../model/message';

export class HttpResponseHandler {
    static fetchResponse<T>(response: HttpResponse<T>) {
        let defaultResponse: T = {} as T;
        return (response.status === 200 && response.body) ? response.body : defaultResponse;
    }
    static handlerResponseError(err: any): Observable<IMessage | any> {
        let { message, status } = err;
        let customMessage: IMessage = {
            message: message,
            type: 'error',
            status: status
        };
        return throwError(customMessage);
    }
}
