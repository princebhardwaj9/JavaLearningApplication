import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './Components/footer/footer.component';
import { Page1Component } from './Theory/page1/page1.component';
import { Page2Component } from './Theory/page2/page2.component';
import { Page3Component } from './Theory/page3/page3.component';
import { Page4Component } from './Theory/page4/page4.component';
import { Page5Component } from './Theory/page5/page5.component';
import { Page6Component } from './Theory/page6/page6.component';
import { Page7Component } from './Theory/page7/page7.component';
import { Page8Component } from './Theory/page8/page8.component';
import { Page9Component } from './Theory/page9/page9.component';
import { Page10Component } from './Theory/page10/page10.component';
import { Page11Component } from './Theory/page11/page11.component';
import { Page12Component } from './Theory/page12/page12.component';
import { Page13Component } from './Theory/page13/page13.component';
import { Page14Component } from './Theory/page14/page14.component';
import { Page15Component } from './Theory/page15/page15.component';
import { Page16Component } from './Theory/page16/page16.component';
import { Page17Component } from './Theory/page17/page17.component';
import { Page18Component } from './Theory/page18/page18.component';
import { Page19Component } from './Theory/page19/page19.component';
import { Page20Component } from './Theory/page20/page20.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
    Page8Component,
    Page9Component,
    Page10Component,
    Page11Component,
    Page12Component,
    Page13Component,
    Page14Component,
    Page15Component,
    Page16Component,
    Page17Component,
    Page18Component,
    Page19Component,
    Page20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
