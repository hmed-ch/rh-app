import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichePaiePageRoutingModule } from './fiche-paie-routing.module';

import { FichePaiePage } from './fiche-paie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichePaiePageRoutingModule
  ],
  declarations: [FichePaiePage]
})
export class FichePaiePageModule {}
