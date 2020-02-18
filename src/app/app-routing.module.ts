import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectUserComponent } from './view/select-user/select-user.component';
import { FutureViewMessagesComponent } from './view/future-view-messages/future-view-messages.component';
import { FutureViewInfoComponent } from './view/future-view-info/future-view-info.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: 'home', component: SelectUserComponent},
  { path: 'messages', component: FutureViewMessagesComponent},
  { path: 'info', component: FutureViewInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
