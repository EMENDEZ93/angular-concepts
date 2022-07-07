import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClicksComponent } from './clicks/clicks.component';
import { DisabledsComponent } from './disableds/disableds.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifsComponent } from './ngifs/ngifs.component';
import { NgmodelsComponent } from './ngmodels/ngmodels.component';
import { NgsubmitsComponent } from './ngsubmits/ngsubmits.component';
import { NgswitchsComponent } from './ngswitchs/ngswitchs.component';
import { ScrollsComponent } from './scrolls/scrolls.component';
import { ValuesComponent } from './values/values.component';

const routes: Routes = [
  {
    path:'disabled',
    component: DisabledsComponent
  },
  {
    path:'home',
    component: AppComponent 
  },  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'value',
    component: ValuesComponent
  },
  {
    path:'click',
    component: ClicksComponent
  },
  {
    path:'scroll',
    component: ScrollsComponent
  },
  {
    path:'ngmodel',
    component: NgmodelsComponent
  },
  {
    path:'ngif',
    component: NgifsComponent
  },
  {
    path:'ngswitch',
    component: NgswitchsComponent
  },
  {
    path:'ngfor',
    component: NgforComponent
  },
  {
    path:'ngclass',
    component: NgclassComponent
  },
  {
    path:'ngsubmit',
    component: NgsubmitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
