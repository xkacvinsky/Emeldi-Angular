import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { NavigateMenuComponent } from './navigate-menu/navigate-menu.component';
import { BannerComponent } from './banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule} from '@angular/forms';
import { SelectUserComponent } from './select-user/select-user.component';
import { TableComponent} from './table/table.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import {CalendarModule} from 'primeng/calendar';
import { FutureViewInfoComponent } from './future-view-info/future-view-info.component';
import { FutureViewMessagesComponent } from './future-view-messages/future-view-messages.component';


@NgModule({
  declarations: [HeaderComponent, NavigateMenuComponent, BannerComponent, SelectUserComponent, TableComponent, AddVacationComponent, FutureViewInfoComponent, FutureViewMessagesComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule
  ],
  exports:[
    HeaderComponent,
    NavigateMenuComponent,
    BannerComponent,
    SelectUserComponent,
    TableComponent,
    AddVacationComponent
  ]
})
export class ViewModule { }
