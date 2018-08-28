import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhsHeaderComponent } from './header.component';
import { DhsHeaderBrandComponent } from './header-brand/header-brand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DhsHeaderComponent, DhsHeaderBrandComponent],
  exports: [DhsHeaderComponent, DhsHeaderBrandComponent]
})
export class DhsHeaderModule { }
