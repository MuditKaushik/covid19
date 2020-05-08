import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NCovid19IndiaHttp, NCovidIndiaService } from './ncovid-api/india';
import { NCovid19WorldHttp, NCovidWorldService } from './ncovid-api/world';
import { SvgIcons } from '../model/covid/icons';
@NgModule({
    imports: [CommonModule],
    providers: [NCovid19IndiaHttp, NCovid19WorldHttp, NCovidIndiaService, NCovidWorldService, SvgIcons]
})
export class CoreModule { }
