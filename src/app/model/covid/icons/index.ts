import { Injectable } from '@angular/core';

export interface IIconSvgUrl {
  [code: string]: string;
}

export enum svgIconCodeEnum {
  covid = 'covid',
  world = 'world',
  india = 'india',
  uk = 'english',
  empty = 'empty'
}

@Injectable()
export class SvgIcons {
  protected readonly _svgIcons: IIconSvgUrl = {} as any;
  protected readonly _svgBaseUrl: string = '/assets/icons/';

  constructor() {
    this._svgIcons[svgIconCodeEnum.empty] = this._svgBaseUrl.concat('empty.svg');
    this._svgIcons[svgIconCodeEnum.world] = this._svgBaseUrl.concat('earth.svg');
    this._svgIcons[svgIconCodeEnum.covid] = this._svgBaseUrl.concat('covid.svg');
    this._svgIcons[svgIconCodeEnum.india] = this._svgBaseUrl.concat('india.svg');
    this._svgIcons[svgIconCodeEnum.uk] = this._svgBaseUrl.concat('uk.svg');
  }

  protected findSvgIconUrl(svgCode: svgIconCodeEnum): string {
    let descriptor = Object.getOwnPropertyDescriptor(this._svgIcons, svgCode);
    if (descriptor) {
      return descriptor.value;
    }
    return this._svgBaseUrl.concat('empty.svg');
  }

  fetch(svgCode: string): string {
    switch (svgCode) {
      case svgIconCodeEnum.world:
      case svgIconCodeEnum.covid:
      case svgIconCodeEnum.india:
      case svgIconCodeEnum.uk:
        return this.findSvgIconUrl(svgCode);
      default: return this.findSvgIconUrl(svgIconCodeEnum.empty);
    }
  }
}
