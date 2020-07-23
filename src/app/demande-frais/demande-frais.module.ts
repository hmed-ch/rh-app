import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeFraisPageRoutingModule } from './demande-frais-routing.module';

import { DemandeFraisPage } from './demande-frais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeFraisPageRoutingModule
  ],
  declarations: [DemandeFraisPage]
})
export class DemandeFraisPageModule {}
