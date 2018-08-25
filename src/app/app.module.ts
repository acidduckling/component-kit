import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DhsKitModule } from 'dhs-kit';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DhsKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
