import { Component, OnInit } from '@angular/core';
import { DemandData } from '../providers/demand-data';

@Component({
  selector: 'app-demande-frais',
  templateUrl: './demande-frais.page.html',
  styleUrls: ['./demande-frais.page.scss'],
})
export class DemandeFraisPage {

  frai: any = {
              name: "Demande Frai",
              user: "Khaoula abdou",
              type: "",
              status: "En cours",
              timeStart: "2020-05-20",
              tracks: ["Ionic"],
              id: 1
            };
  role: any ="";


  constructor(public demandData: DemandData) {}

  
  add_frai(){
    this.demandData.addAvance(this.frai);
  }
  
}
