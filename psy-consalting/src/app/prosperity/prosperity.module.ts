import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ProsperityRoutingModule} from "./prosperity-routing.module";
import { ProsperityRatingComponent } from './prosperity-rating/prosperity-rating.component';
import {StoreModule} from "@ngrx/store";
import { prosperityReducer } from './prosperity.reducer';
import {ProsperityService} from "./prosperity.service";


@NgModule({
    declarations: [ProsperityRatingComponent],
    imports: [
        SharedModule,
        ProsperityRoutingModule,
        StoreModule.forFeature('prosperity', prosperityReducer)
    ]
})

export class ProsperityModule {

}