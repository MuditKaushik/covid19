export interface ICovidGlobalSummary {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}

export interface ICovidCountrySummary {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: Date | string;
}

export interface ICovidSummary {
    Global: ICovidGlobalSummary;
    Countries: Array<ICovidCountrySummary>;
    Date: Date | string;
}