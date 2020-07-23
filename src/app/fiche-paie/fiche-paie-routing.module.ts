import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichePaiePage } from './fiche-paie.page';

const routes: Routes = [
  {
    path: '',
    component: FichePaiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichePaiePageRoutingModule {}
