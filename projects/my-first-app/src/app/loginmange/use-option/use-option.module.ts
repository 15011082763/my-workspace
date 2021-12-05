
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UseOptionDetailComponent } from "./use-option-detail/use-option-detail.component";
import { UseOptionComponent } from "./use-option-list/use-option.component";

@NgModule(
    {
        imports: [
           RouterModule.forChild([
            { path: '', component: UseOptionComponent },
            {path: 'detail',component:UseOptionDetailComponent}
        ]),
        ],
        declarations: [UseOptionComponent, UseOptionDetailComponent]
    }
)



export class UseOptionModule {

}