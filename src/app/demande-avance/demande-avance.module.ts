import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeAvancePageRoutingModule } from './demande-avance-routing.module';

import { DemandeAvancePage } from './demande-avance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeAvancePageRoutingModule
  ],
  declarations: [DemandeAvancePage]
})
export class DemandeAvancePageModule {}
