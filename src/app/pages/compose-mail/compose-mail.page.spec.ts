import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComposeMailPage } from './compose-mail.page';

describe('ComposeMailPage', () => {
  let component: ComposeMailPage;
  let fixture: ComponentFixture<ComposeMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComposeMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
