export interface ICovidCountry {
    Country: string;
    Slug: string;
    ISO2: string;
}

export interface ICovidCountryList {
    countries: Array<ICovidCountry>;
}

export interface ICovidCountryCases {
    Country: string;
    CountryCode: string;
    Lat: string;
    Lon: string;
    Cases: number;
    Status: string;
    Date: Date | string;
}

export interface ICovidCountryConfirm extends ICovidCountryCases {
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
    LocationID: string;
}
