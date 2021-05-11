import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Principal', url: '' },
        { title: 'Progreso', url: 'progress' },
        { title: 'Gráficas', url: 'graphic1' },
        { title: 'Promesas', url: 'promises' },
      ],
    },
  ];

  constructor() {}
}
