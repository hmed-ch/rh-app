import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeAvancePage } from './demande-avance.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeAvancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeAvancePageRoutingModule {}
