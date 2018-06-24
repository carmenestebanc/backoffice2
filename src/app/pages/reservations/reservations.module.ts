import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { HttpModule } from '@angular/http';


import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsDetailsComponent } from './reservations-details/reservations-details.component';
import { ReservationsAddComponent } from './reservations-add/reservations-add.component';
import { ReservationsUpdateComponent } from './reservations-update/reservations-update.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationsComponent } from './reservations.component';

@NgModule({
  imports: [
    CommonModule,
    ReservationsRoutingModule 
  ],
  declarations: [
  	ReservationsDetailsComponent, 
  	ReservationsAddComponent, 
  	ReservationsUpdateComponent, 
  	ReservationsListComponent, 
  	ReservationsComponent
  	]
})
export class ReservationsModule { }
