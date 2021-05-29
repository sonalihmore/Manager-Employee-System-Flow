import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AppMaterialModule } from '../shared/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    declarations: [
      AddEditEmployeeComponent,
      DeleteEmployeeComponent,
      HomeComponent

    ]
})
export class HomeModule { }
