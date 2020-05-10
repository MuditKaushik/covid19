import { Pipe, PipeTransform } from '@angular/core';
import { formatNumbers } from './number-format';

export type formatType = 'number';

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {
  constructor() { }
  transform(value: any, type: formatType) {
    if (!this.validateValue(value)) {
      return value;
    }
    switch (type) {
      case 'number': return formatNumbers(value.toString());
    }
  }
  protected validateValue(value: any): boolean {
    if (value == null || value.toString().trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
