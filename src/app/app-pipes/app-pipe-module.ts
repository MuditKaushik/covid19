import { NgModule } from '@angular/core';
import { BinarySearchPipe } from './algo-pipe/binary-search-pipe';
import { FormatPipe } from './format';
@NgModule({
    declarations: [BinarySearchPipe, FormatPipe],
    exports: [BinarySearchPipe, FormatPipe]
})
export class AppPipeModule { }
