import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { BoletimCadastroComponent } from '../../boletim/boletim-cadastro/boletim-cadastro.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user/user-profile/user-profile.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { BoletimListComponent } from '../../boletim/boletim-list/boletim-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { DateFormat } from '../admin-layout/date-format';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  DateAdapter,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
    ],

  declarations: [
    DashboardComponent,
    UserProfileComponent,
    BoletimListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    BoletimCadastroComponent,
    UserListComponent
   ],
  providers: [
    { provide: DateAdapter, useClass: DateFormat },
    ],
})

export class AdminLayoutModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
   dateAdapter.setLocale('pt-BR'); // DD/MM/YYYY
  }
}


