import { NgModule } from '@angular/core';
import { BinarySearchPipe } from './algo-pipe/binary-search-pipe';

@NgModule({
    declarations: [BinarySearchPipe],
    exports: [BinarySearchPipe]
})
export class AppPipeModule { }
