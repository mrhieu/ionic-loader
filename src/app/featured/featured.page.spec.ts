import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeaturedPage } from './featured.page';

describe('FeaturedPage', () => {
  let component: FeaturedPage;
  let fixture: ComponentFixture<FeaturedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
