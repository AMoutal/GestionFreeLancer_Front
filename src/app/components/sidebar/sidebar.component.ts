import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/freelancers', title: 'Freelancers',  icon:'ni ni-spaceship text-indigo', class: '' },
    { path: '/entreprises', title: 'Entreprises',  icon:'ni ni-planet text-red', class: '' },
    { path: '/admin-projet', title: 'Liste projet',  icon:'ni ni-atom text-orange:hover', class: '' },
    { path: '/tests', title: 'Tests',  icon:'"ni ni-compass-04 text-blue', class: '' },
    { path: '/recruteurs', title: 'Recruteurs',  icon:'ni-paper-diploma text-green', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
