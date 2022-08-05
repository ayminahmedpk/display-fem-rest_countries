

import { Action } from "redux"

export type NormalAction = Action<string>;
export type PayloadAction<T> = NormalAction & {payload: T;};