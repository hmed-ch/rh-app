import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandsPage } from './demands.page';

describe('DemandsPage', () => {
  let component: DemandsPage;
  let fixture: ComponentFixture<DemandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
