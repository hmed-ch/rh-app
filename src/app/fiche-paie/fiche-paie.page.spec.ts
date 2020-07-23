import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichePaiePage } from './fiche-paie.page';

describe('FichePaiePage', () => {
  let component: FichePaiePage;
  let fixture: ComponentFixture<FichePaiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePaiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichePaiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
