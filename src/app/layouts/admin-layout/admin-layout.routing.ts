import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user/user-profile/user-profile.component';
import { BoletimCadastroComponent } from '../../boletim/boletim-cadastro/boletim-cadastro.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { UserNewpasswordComponent } from 'app/user/user-newpassword/user-newpassword.component';
import { BoletimListComponent } from '../../boletim/boletim-list/boletim-list.component';
import { OrigemBoletimComponent } from 'app/cadastros/origem-boletim/origem-boletim.component';

export const AdminLayoutRoutes: Routes = [
    /*rotas para cadastro*/
    {
       path: '',
       children: [ {
         path: 'boletim-cadastro/:codigo',
         component: BoletimCadastroComponent
     }]},
     {
       path: '',
        children: [ {
         path: 'cadastro-origem-boletim/:codigo',
         component: OrigemBoletimComponent
    }]},
    // {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    /*rotas para novo*/
    { path: 'home',      component: DashboardComponent },
    { path: 'usuario-cadastro',   component: UserProfileComponent },
    { path: 'usuario-list',     component: UserListComponent },
    { path: 'novasenha',   component: UserNewpasswordComponent },
    { path: 'boletim-cadastro',        component: BoletimCadastroComponent },
    { path: 'boletim-list',     component: BoletimListComponent },
    { path: 'cadastro-origem-boletim', component: OrigemBoletimComponent}
];
