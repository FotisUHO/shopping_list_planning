import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SketchesPage } from './sketches.page';

describe('SketchesPage', () => {
  let component: SketchesPage;
  let fixture: ComponentFixture<SketchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SketchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
