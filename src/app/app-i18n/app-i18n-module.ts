import { NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig } from '@ngneat/transloco';
import { i18nHttp } from './i18n/i18n-http';
import { supportLanguageList } from './language';

@NgModule({
    exports: [TranslocoModule],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: supportLanguageList.map(lang => lang.code),
                reRenderOnLangChange: true,
                defaultLang: 'en',
                fallbackLang: 'en',
                failedRetries: 1
            })
        },
        {
            provide: TRANSLOCO_LOADER,
            useClass: i18nHttp
        }
    ]
})
export class Appi18nModule { }
