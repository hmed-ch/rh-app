import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeAvancePage } from './demande-avance.page';

describe('DemandeAvancePage', () => {
  let component: DemandeAvancePage;
  let fixture: ComponentFixture<DemandeAvancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAvancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeAvancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
