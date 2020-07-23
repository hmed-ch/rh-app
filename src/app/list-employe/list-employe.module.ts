import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEmployePageRoutingModule } from './list-employe-routing.module';

import { ListEmployePage } from './list-employe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEmployePageRoutingModule
  ],
  declarations: [ListEmployePage]
})
export class ListEmployePageModule {}
