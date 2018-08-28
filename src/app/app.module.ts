import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DhsKitModule, DhsAccordionModule, DhsHeaderModule } from 'dhs-kit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DhsKitModule.init({ theme: 'light' }), DhsAccordionModule, DhsHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
