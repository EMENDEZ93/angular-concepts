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
import { SenderComponent } from './inputs/sender/sender.component';
import { ReceiverComponent } from './inputs/receiver/receiver.component';
import { ParentComponent } from './output/parent/parent.component';
import { ChildComponent } from './output/child/child.component';
import { VidaComponent } from './ciclo/vida/vida.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { CustompipePipe } from './pipes/custompipe.pipe';
import { DirectiveaDirective } from './directives/directivea.directive';
import { DirectiveComponent } from './directives/directive/directive.component';
import { GetserviceComponent } from './http/getservice/getservice.component';

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
    NgsubmitsComponent,
    SenderComponent,
    ReceiverComponent,
    ParentComponent,
    ChildComponent,
    VidaComponent,
    PipesComponent,
    CustompipePipe,
    DirectiveaDirective,
    DirectiveComponent,
    GetserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
