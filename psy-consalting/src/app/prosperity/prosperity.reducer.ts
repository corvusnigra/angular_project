import { createFeatureSelector, createSelector } from '@ngrx/store';
import {Prosperity} from "./prosperity.model";
import * as fromRoot from '../app.reducer';
import {ProsperityAction, SET_PROSPERITY} from "./prosperity.action";

export interface ProsperityState {
    prosperity: Prosperity
}

export interface State extends fromRoot.State {
    prosperity: ProsperityState;
}


const initialState: ProsperityState = {
    prosperity: new Prosperity()
};

export function prosperityReducer(state = initialState, action: ProsperityAction) {
    switch (action.type) {
        case SET_PROSPERITY:
            return {
                ...state,
                prosperity: action.payload
            };
        default: {
            return state;
        }
    }
}

export const getProsperityState = createFeatureSelector<ProsperityState>('prosperity');

export const getProsperity = createSelector(getProsperityState, (state: ProsperityState) => state.prosperity);
