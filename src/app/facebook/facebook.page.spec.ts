import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacebookPage } from './facebook.page';

describe('FacebookPage', () => {
  let component: FacebookPage;
  let fixture: ComponentFixture<FacebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
