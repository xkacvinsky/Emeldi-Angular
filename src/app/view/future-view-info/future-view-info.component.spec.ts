import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureViewInfoComponent } from './future-view-info.component';

describe('FutureViewInfoComponent', () => {
  let component: FutureViewInfoComponent;
  let fixture: ComponentFixture<FutureViewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureViewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
