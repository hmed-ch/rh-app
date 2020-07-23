import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeFraisPage } from './demande-frais.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeFraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeFraisPageRoutingModule {}
