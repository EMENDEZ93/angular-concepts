import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VidaComponent } from './ciclo/vida/vida.component';
import { ClicksComponent } from './clicks/clicks.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { DisabledsComponent } from './disableds/disableds.component';
import { SenderComponent } from './inputs/sender/sender.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifsComponent } from './ngifs/ngifs.component';
import { NgmodelsComponent } from './ngmodels/ngmodels.component';
import { NgsubmitsComponent } from './ngsubmits/ngsubmits.component';
import { NgswitchsComponent } from './ngswitchs/ngswitchs.component';
import { ParentComponent } from './output/parent/parent.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
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
  },
  {
    path:'input',
    component: SenderComponent
  },
  {
    path:'output',
    component: ParentComponent
  },
  {
    path:'ciclo-vida',
    component: VidaComponent
  },
  {
    path:'pipes',
    component: PipesComponent
  },
  {
    path:'directive',
    component: DirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
