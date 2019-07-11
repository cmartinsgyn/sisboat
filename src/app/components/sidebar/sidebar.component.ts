import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Inicio',  icon: 'dashboard', class: '' },
    { path: '/usuario-cadastro', title: 'Cadastro Usuário',  icon: 'person', class: '' },
    { path: '/usuario-list', title: 'Lista de Usuários',  icon: 'list', class: '' },
    { path: '/boletim-list', title: 'Lista Boletins',  icon: 'list', class: '' },
    { path: '/boletim-cadastro', title: 'Cadastro de Boletim',  icon: 'library_books', class: '' },
    { path: '/cadastro-origem-boletim', title: 'Origem Boletim',  icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
