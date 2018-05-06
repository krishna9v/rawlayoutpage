import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SidegridComponent } from './sidegrid/sidegrid.component';
import { LayoutComponent } from './layout/layout.component';
/*import { ContestComponent } from './contest/contest.component';
import { BestPerformersComponent } from './best-performers/best-performers.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { FaqComponent } from './faq/faq.component';
import { FmlBuxComponent } from './fml-bux/fml-bux.component';
import { HomeComponent } from './home/home.component';
import { HowtoPlay2Component } from './howto-play2/howto-play2.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';*/


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidegridComponent,
    LayoutComponent,
   /* ContestComponent,
    BestPerformersComponent,
    BoxOfficeComponent,
    FaqComponent,
    FmlBuxComponent,
    HomeComponent,
    HowtoPlay2Component,
    HowToPlayComponent*/
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
