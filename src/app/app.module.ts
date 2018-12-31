import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KitKitModule, KitAccordionModule, KitHeaderModule } from 'kit-kit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KitKitModule.init({ theme: 'light' }), KitAccordionModule, KitHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
