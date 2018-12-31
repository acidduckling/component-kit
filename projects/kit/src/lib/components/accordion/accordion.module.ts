import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitAccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KitAccordionComponent],
  exports: [KitAccordionComponent]
})
export class KitAccordionModule {}
