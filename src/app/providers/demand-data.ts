import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserData } from './user-data';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DemandData {
  data: any;
  private _data: any;

  constructor(public http: HttpClient, public storage: Storage, public user: UserData, public router: Router) {
    this.load();
    this.getDatastorage();
    this._data = new BehaviorSubject(this.data);
  }

  load(): any {
    this.getDatastorage();
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }

  public setchangement(data?) {
    this.data = data || this.data;
    this.setDatastorage(this.data)
    this._data.next(this.data);
    // localStorage.setItem('bot', JSON.stringify(this.bot));
    // localStorage.setItem('botid', `${this.botId}`);
  }

  public getchangement() {
    return this._data.asObservable();
  }

  public addConge(conge){
    if (!this.data) {
      this.load()
    } 
    var today = new Date();

    this.data.demands.unshift(conge);
    this.setchangement();
    this.router.navigateByUrl('/demands');

  }

  public addFrai(frai){
    if (!this.data) {
      this.load()
    } 
    var today = new Date();
    this.data.demands.unshift(frai);
    this.setchangement();
    this.router.navigateByUrl('/demands');

  }

  public addAvance(avance){
    if (!this.data) {
      this.load()
    } 
    var today = new Date();

    this.data.demands.unshift(avance);
    this.setchangement();
    this.router.navigateByUrl('/demands');

  }


  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
  

    return this.data;
  }

  getTimeline(
    dayIndex: number,
    queryText = '',
    excludeTracks: any[] = [],
    segment = 'all'
  ) {
    return this.load().pipe(
      map((data: any) => {
        data['shownSessions'] = data.demands.length;

        return data;
      })
    );
  }

  filterSession(
    session: any,
    queryWords: string[],
    excludeTracks: any[],
    segment: string
  ) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }

    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    session.tracks.forEach((trackName: string) => {
      if (excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });

    // if the segment is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }

    // all tests must be true if it should not be hidden
    session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }

  getSpeakers() {
    return this.load().pipe(
      map((data: any) => {
        return data.speakers.sort((a: any, b: any) => {
          const aName = a.name.split(' ').pop();
          const bName = b.name.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }

  getTracks() {
    return this.load().pipe(
      map((data: any) => {
        return data.tracks.sort();
      })
    );
  }

  getMap() {
    return this.load().pipe(
      map((data: any) => {
        return data.map;
      })
    );
  }

  getEmployes() {
    return this.load().pipe(
      map((data: any) => {
        return data.employe;
      })
    );
  }
  saveStatus(datastatus) {
    for (let entry of datastatus) {
        for (let entry2 of this.data.demands) {
          if (entry.id == entry2.id &&  entry.user == entry2.user) {
            entry2.status = entry.status;
          }
        }
        }
    this.setchangement();
  }
  
  save_employe(employes){
    this.data.employe = employes;
    this.setchangement();
  }

   setDatastorage(data): Promise<any> {
    return this.storage.set('data', JSON.stringify(data));
  }

  getDatastorage(): Promise<any> {
    return this.storage.get('data').then((value) => {
      if (value) {
        this.setchangement(JSON.parse(value));
      }
      return JSON.parse(value);
    });
  }
}
