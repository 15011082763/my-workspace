import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '**', component: HomePageComponent },

            {path:'home-page',component:HomePageComponent}
        ]),
    ],

    declarations: [HomePageComponent]
})

export class HomePageModule {

}
