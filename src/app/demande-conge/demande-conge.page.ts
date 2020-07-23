import { Component, OnInit } from '@angular/core';
import { DemandData } from '../providers/demand-data';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.page.html',
  styleUrls: ['./demande-conge.page.scss'],
})
export class DemandeCongePage {
  conge: any = {
              name: "Demande Congé",
              user: "khaoula abdou",
              type: "",
              status: "En cours",
              timeStart: "2020-05-20",
              timeEnd: "2020-06-20",
              tracks: ["Ionic"],
              id: 1
            };

  constructor(public demandData: DemandData) {}

  

  add_conge(){
    this.demandData.addConge(this.conge);
  }

}
