import { Component, OnInit } from '@angular/core';
import { DemandData } from '../providers/demand-data';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.page.html',
  styleUrls: ['./list-employe.page.scss'],
})
export class ListEmployePage implements OnInit {

  role: any ="";
  employes: any = [];


  constructor(public demandData: DemandData) {}

  ngOnInit() {
    this.demandData.getEmployes().subscribe((employes: any[]) => {this.employes = employes;
      console.log(this.employes);
    });
    
  }

  
  save_employe(){
    this.demandData.save_employe(this.employes);
  }

}
