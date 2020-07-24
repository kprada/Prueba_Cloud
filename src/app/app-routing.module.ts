import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPerrosComponent } from './pages/welcome/list-perros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'perros/:item', component: ListPerrosComponent },

  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
