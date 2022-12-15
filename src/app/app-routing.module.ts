import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [




  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accueil',
    component: AcceuilComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,],
})
export class AppRoutingModule {}
