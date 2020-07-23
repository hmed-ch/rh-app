import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { DemandData } from '../providers/demand-data';
import { UserData } from '../providers/user-data';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.page.html',
  styleUrls: ['./demands.page.scss'],
})
export class DemandsPage implements OnInit {
  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  demands: any = [];
  rhdemands: any = [];
  role: any ="";
  confDate: string;
  showSearchbar: boolean;
  shownrhSessions:any = 0;

  constructor(public alertCtrl: AlertController,
    public demandData: DemandData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config) {demandData.getchangement().subscribe(
      (data) => {

      if (data){
      this.demands = data.demands;    
      this.rhdemands = [];  
      for (let entry of this.demands) {
          if ( entry.status == 'En cours') {
            this.rhdemands.push(entry);
            this.shownrhSessions+=1;
          }
        };
      this.shownrhSessions= this.rhdemands.length;

      };

         },
    ); }

  ngOnInit() {
    this.updateDemande();
    this.user.getUserrole().then((role) => {
      this.role = role;
    });
    window.addEventListener('user:login', () => {
      console.log(this.role);
      console.log('reloading');
      window.location.reload();
    });
    this.ios = this.config.get('mode') === 'ios';
  }

  updateDemande() {
    

    this.demandData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data['shownSessions'];
      this.demands = data.demands;

      for (let entry of this.demands) {
          if (entry.status == 'En cours') {
            this.rhdemands.push(entry);
          }
        }
        this.shownrhSessions= this.rhdemands.length;
        console.log(this.shownSessions);
        console.log(this.shownrhSessions);
    });
  }

  savestatus(){
    console.log(this.rhdemands);
    this.demandData.saveStatus(this.rhdemands);
  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateDemande();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData.name);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.name} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }

  }

 

}
