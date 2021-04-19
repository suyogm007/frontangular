import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchipComponent } from './matchip/matchip.component';
import { ExpandComponent } from './expand/expand.component';


const routes: Routes = [
  {path:'matchip', component: MatchipComponent},
  {path:'expand', component: ExpandComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
