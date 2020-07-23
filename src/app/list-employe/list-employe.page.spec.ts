import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListEmployePage } from './list-employe.page';

describe('ListEmployePage', () => {
  let component: ListEmployePage;
  let fixture: ComponentFixture<ListEmployePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListEmployePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
