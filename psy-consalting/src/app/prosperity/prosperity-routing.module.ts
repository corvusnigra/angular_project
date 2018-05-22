import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProsperityRatingComponent} from "./prosperity-rating/prosperity-rating.component";

const routes: Routes = [
    {path: '', component: ProsperityRatingComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class ProsperityRoutingModule {

}