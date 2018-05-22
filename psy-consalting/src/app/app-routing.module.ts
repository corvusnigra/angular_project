import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import { WelcomeComponent } from './welcome/welcome/welcome.component';


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    {path: 'prosperity', loadChildren: './prosperity/prosperity.module#ProsperityModule', canLoad: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}