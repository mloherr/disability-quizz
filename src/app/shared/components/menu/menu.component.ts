import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuItems: MenuItem[] = [
    {
      label: 'Accesibilidad',
      icon: 'pi pi-user',
      command: () => {
        console.log('Se hizo click en accesibilidad')
      },
      items: [
        {
          label: 'Aumentar tamaño letra',
          icon: 'pi pi-fw pi-cog',
          command: () => {
              console.log('Opción 1 seleccionada');
          }
      },
      {
          label: 'Opción 2',
          icon: 'pi pi-fw pi-cog',
          command: () => {
              console.log('Opción 2 seleccionada');
          }
      }
      ]
    },
    {
      label: 'Proyecto',
      icon: 'pi pi-fw pi-briefcase',
      command: () => {
        console.log('Se hizo click en proyecto')
      }
    }
  ];

}
