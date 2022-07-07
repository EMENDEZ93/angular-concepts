import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisabledsComponent } from './disableds/disableds.component';
import { ValuesComponent } from './values/values.component';
import { ClicksComponent } from './clicks/clicks.component';
import { ScrollsComponent } from './scrolls/scrolls.component';
import { NgmodelsComponent } from './ngmodels/ngmodels.component';
import { FormsModule } from '@angular/forms';
import { NgifsComponent } from './ngifs/ngifs.component';
import { NgswitchsComponent } from './ngswitchs/ngswitchs.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgsubmitsComponent } from './ngsubmits/ngsubmits.component';

@NgModule({
  declarations: [
    AppComponent,
    DisabledsComponent,
    ValuesComponent,
    ClicksComponent,
    ScrollsComponent,
    NgmodelsComponent,
    NgifsComponent,
    NgswitchsComponent,
    NgforComponent,
    NgclassComponent,
    NgsubmitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
