import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinC1Component } from './coin-c1/coin-c1.component';
import { CoinC2Component } from './coin-c2/coin-c2.component';
import { CoinC3Component } from './coin-c3/coin-c3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoinsComponent,
    CoinC1Component,
    CoinC2Component,
    CoinC3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
