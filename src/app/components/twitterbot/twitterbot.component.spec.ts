import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterbotComponent } from './twitterbot.component';

describe('TwitterbotComponent', () => {
  let component: TwitterbotComponent;
  let fixture: ComponentFixture<TwitterbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
