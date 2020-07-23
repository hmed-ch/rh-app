import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeFraisPage } from './demande-frais.page';

describe('DemandeFraisPage', () => {
  let component: DemandeFraisPage;
  let fixture: ComponentFixture<DemandeFraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeFraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeFraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
