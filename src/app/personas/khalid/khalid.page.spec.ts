import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhalidPage } from './khalid.page';

describe('KhalidPage', () => {
  let component: KhalidPage;
  let fixture: ComponentFixture<KhalidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhalidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhalidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
