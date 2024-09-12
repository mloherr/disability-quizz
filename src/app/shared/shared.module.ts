import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
