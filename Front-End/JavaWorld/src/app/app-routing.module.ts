import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
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


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'page1', component:Page1Component},
  {path: 'page2', component:Page2Component},
  {path: 'page3', component:Page3Component},
  {path: 'page4', component:Page4Component},
  {path: 'page5', component:Page5Component},
  {path: 'page6', component:Page6Component},
  {path: 'page7', component:Page7Component},
  {path: 'page8', component:Page8Component},
  {path: 'page9', component:Page9Component},
  {path: 'page10', component:Page10Component},
  {path: 'page11', component:Page11Component},
  {path: 'page12', component:Page12Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
