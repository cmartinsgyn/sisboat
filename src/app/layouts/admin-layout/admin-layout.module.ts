import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { BoletimCadastroComponent } from '../../boletim/boletim-cadastro/boletim-cadastro.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user/user-profile/user-profile.component';
import { UserNewpasswordComponent } from 'app/user/user-newpassword/user-newpassword.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { BoletimListComponent } from '../../boletim/boletim-list/boletim-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { OrigemBoletimComponent } from 'app/cadastros/origem-boletim/origem-boletim.component';

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
  MatIconModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    ReactiveFormsModule

    ],

  declarations: [
    DashboardComponent,
    UserProfileComponent,
    BoletimListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    BoletimCadastroComponent,
    UserListComponent,
    UserNewpasswordComponent,
    OrigemBoletimComponent
   ],
  providers: [
    { provide: DateAdapter, useClass: DateFormat},
    ],

})

export class AdminLayoutModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
   dateAdapter.setLocale('pt-BR'); // DD/MM/YYYY
  }
}


