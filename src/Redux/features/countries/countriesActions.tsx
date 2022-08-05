

import { Countries } from "../../features/countries/CountriesTypes";
import { NormalAction, PayloadAction } from "../../commonReduxTypes";


export type FetchCountriesRequestAction = NormalAction;
export type FetchCountriesSuccessAction = PayloadAction<Countries>;
export type FetchCountriesFailureAction = PayloadAction<string>;

export type SelectRegionAction = PayloadAction<string>;

export type CountriesActions = FetchCountriesRequestAction
                             | FetchCountriesSuccessAction
                             | FetchCountriesFailureAction;

export type CountriesLocalActions = SelectRegionAction;