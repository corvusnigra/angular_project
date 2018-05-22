import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {MaterialModule} from "./material.module";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireModule} from "angularfire2";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./app.reducer";
import {AuthService} from "./auth/auth.service";
import {UIService} from "./shared/ui.service";
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import {ProsperityService} from "./prosperity/prosperity.service";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavListComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AuthModule,
        AngularFirestoreModule,
        StoreModule.forRoot(reducers)
    ],
    providers: [
        AuthService,
        UIService,
        ProsperityService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
