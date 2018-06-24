// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReservationsDetailsComponent } from './reservations-details/reservations-details.component';
import { ReservationsAddComponent } from './reservations-add/reservations-add.component';
import { ReservationsUpdateComponent } from './reservations-update/reservations-update.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationsComponent } from './reservations.component';

const routes: Routes = [
  { path: '', component: ReservationsComponent, pathMatch: 'full' },
  {
    path: 'list',
    component: ReservationsListComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Reservation List' }
  },
    {
    path: 'detail/:id',
    component: ReservationsDetailsComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Reservation Details' }
  },
  {
    path: 'add',
    component: ReservationsAddComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Add Reservation' },
  },
  {
    path: 'update/:id',
    component: ReservationsUpdateComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Update Reservation' }
  }

];

export const ReservationsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
