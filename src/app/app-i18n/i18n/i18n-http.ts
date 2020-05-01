import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoLoader } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class i18nHttp implements TranslocoLoader {
    constructor(private http: HttpClient) { }
    getTranslation(lang: string) {
        let i18n = lang.match(/i18n/);
        if (i18n == null) {
            lang = `i18n/`.concat(lang);
        }
        return this.http.get(`./assets/${lang}.json`);
    }
}
