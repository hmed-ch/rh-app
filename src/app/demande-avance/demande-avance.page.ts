import { Component, OnInit } from '@angular/core';
import { DemandData } from '../providers/demand-data';

@Component({
  selector: 'app-demande-avance',
  templateUrl: './demande-avance.page.html',
  styleUrls: ['./demande-avance.page.scss'],
})
export class DemandeAvancePage {

  avance: any = {
              name: "Demande Avance",
              user: "khaoula abdou",
              type: "",
              status: "En cours",
              timeStart: "2020-05-20",
              tracks: ["Ionic"],
              id: 1
            };

  constructor(public demandData: DemandData) {}


  add_avance(){
    this.demandData.addAvance(this.avance);
  }

}
