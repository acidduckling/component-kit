import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitHeaderComponent } from './header.component';
import { KitHeaderBrandComponent } from './header-brand/header-brand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KitHeaderComponent, KitHeaderBrandComponent],
  exports: [KitHeaderComponent, KitHeaderBrandComponent]
})
export class KitHeaderModule { }
