import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginmanageroute } from './loginmange/route';
const routes: Routes = [];

@NgModule({
  imports: [loginmanageroute,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
