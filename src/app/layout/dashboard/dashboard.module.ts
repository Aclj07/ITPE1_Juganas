import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/components/component.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
