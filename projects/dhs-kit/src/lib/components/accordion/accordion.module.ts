import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhsAccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DhsAccordionComponent],
  exports: [DhsAccordionComponent]
})
export class DhsAccordionModule {}
