export interface IDistrictDelta {
    confirmed: number;
    deceased: number;
    recovered: number;
}
export interface IDistrictInfo {
    notes: string;
    active: number;
    confirmed: number;
    deceased: number;
    recovered: number;
    delta: IDistrictDelta;
}

export interface ICovidDistrictState {
    statecode: string;
    districtData: { [district: string]: IDistrictInfo }
}

export interface ICovidDistrictStateData {
    [state: string]: ICovidDistrictState;
}
