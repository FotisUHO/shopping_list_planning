import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiriamPage } from './miriam.page';

describe('MiriamPage', () => {
  let component: MiriamPage;
  let fixture: ComponentFixture<MiriamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiriamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiriamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
