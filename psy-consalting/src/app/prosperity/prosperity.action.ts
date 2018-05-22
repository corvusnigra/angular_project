import { Action } from '@ngrx/store';
import {Prosperity} from "./prosperity.model";

export const SET_PROSPERITY = '[Prosperity] Set Prosperity';

export class SetProsperity implements Action {
    readonly type = SET_PROSPERITY;

    constructor(public payload: Prosperity) {}
}



export type ProsperityAction = SetProsperity;
