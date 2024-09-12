import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizzModule { }
