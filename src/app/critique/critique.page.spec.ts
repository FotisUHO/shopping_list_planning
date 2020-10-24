import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CritiquePage } from './critique.page';

describe('CritiquePage', () => {
  let component: CritiquePage;
  let fixture: ComponentFixture<CritiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CritiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
