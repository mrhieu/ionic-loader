import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinterestPage } from './pinterest.page';

describe('PinterestPage', () => {
  let component: PinterestPage;
  let fixture: ComponentFixture<PinterestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
