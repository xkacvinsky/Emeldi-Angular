import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureViewMessagesComponent } from './future-view-messages.component';

describe('FutureViewMessagesComponent', () => {
  let component: FutureViewMessagesComponent;
  let fixture: ComponentFixture<FutureViewMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureViewMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureViewMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
