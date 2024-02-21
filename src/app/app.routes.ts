import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BehaviorsubjectparentComponent } from './behaviorsubjectparent/behaviorsubjectparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
    {path:'home',component:LandingpageComponent},
    {path:'pipe',component:PipeComponent},
    {path:'event',component:EventparentComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'behavior', component:BehaviorsubjectparentComponent},
    {path:'service',component:ServicecomponentComponent},
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent},
    {path:'templateform',component:TemplatedrivenformComponent},
    {path:'reactiveform',component:ReactiveformComponent},
    {path:'sample', children:[
        {path:'',component:DisplaycontactComponent},
        {path:'deposit',component:LandingpageComponent},
        {path:':i',component:DisplaycontactComponent},
    ]},
    {path:'dashboard',children:[
        {path:'',component:DashboardComponent},
        {path:'settings', component:SettingsComponent}
    ],canActivate:[studentguardGuard]},

    {path:'display/:name', component:DisplaycontactComponent},
    {path:'**', component:ErrorpageComponent},


];
