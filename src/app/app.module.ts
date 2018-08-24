import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DhsKitModule } from 'dhs-kit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DhsKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
