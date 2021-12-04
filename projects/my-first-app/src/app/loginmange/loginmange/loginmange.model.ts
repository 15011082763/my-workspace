import { NgModule, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginpangeComponent } from './loginpange.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '**', component: LoginpangeComponent },
            {path:'menu',component:HomePageComponent}
        ]),
    ],
    declarations: [LoginpangeComponent]
})


export class loginmanagemodel {

}
