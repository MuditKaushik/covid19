import { ICovidCountrySummary } from '../world/ICovidGlobalSummary';

export interface IIndexPosition {
  startPos: number;
  endPos: number;
}

export interface ICountryIndex {
  [alphabet: string]: IIndexPosition;
}

export class CountryIndex {
  protected _countryIndex: ICountryIndex = Object.create({} as ICountryIndex);
  constructor(countries: Array<ICovidCountrySummary>) {
    this.createCountryIndex(countries);
  }

  get getCountryIndex(): ICountryIndex {
    return this._countryIndex;
  }

  protected createCountryIndex(countries: Array<ICovidCountrySummary>): void {
    countries.map((country, index) => {
      let isLast = (index < countries.length - 1);
      if (isLast) {
        let firstCountryChar = country.Country.charAt(0).toLowerCase();
        let nextCountryChar = countries[index + 1].Country.charAt(0).toLowerCase();
        if (firstCountryChar === nextCountryChar) {
          if (!Object.getOwnPropertyDescriptor(this._countryIndex, firstCountryChar)) {
            this._countryIndex[firstCountryChar] = { startPos: index, endPos: 0 };
          }
        } else {
          this._countryIndex[firstCountryChar].endPos = index + 1;
          this._countryIndex[nextCountryChar] = { startPos: index + 1, endPos: (isLast) ? countries.length - 1 : 0 };
        }
      }
    });
  }
}
