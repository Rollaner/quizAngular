import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'update',component:UpdateComponent},
  {path:'main/:region', component:MainComponent},
  //{ path: '',   redirectTo: '/update', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
