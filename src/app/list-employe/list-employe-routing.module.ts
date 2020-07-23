import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployePage } from './list-employe.page';

const routes: Routes = [
  {
    path: '',
    component: ListEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEmployePageRoutingModule {}
