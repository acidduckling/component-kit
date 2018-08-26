import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DhsKitModule, DhsAccordionModule } from 'dhs-kit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DhsKitModule.init({ theme: 'light' }), DhsAccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
