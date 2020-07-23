import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'demands',
    loadChildren: () => import('./demands/demands.module').then( m => m.DemandsPageModule)
  },
  {
    path: 'demande-conge',
    loadChildren: () => import('./demande-conge/demande-conge.module').then( m => m.DemandeCongePageModule)
  },
  {
    path: 'demande-avance',
    loadChildren: () => import('./demande-avance/demande-avance.module').then( m => m.DemandeAvancePageModule)
  },
  {
    path: 'demande-frais',
    loadChildren: () => import('./demande-frais/demande-frais.module').then( m => m.DemandeFraisPageModule)
  },
  {
    path: 'list-employe',
    loadChildren: () => import('./list-employe/list-employe.module').then( m => m.ListEmployePageModule)
  },
  {
    path: 'fiche-paie',
    loadChildren: () => import('./fiche-paie/fiche-paie.module').then( m => m.FichePaiePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
