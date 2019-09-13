import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcHomeComponent } from './uc-home.component';

describe('UcHomeComponent', () => {
  let component: UcHomeComponent;
  let fixture: ComponentFixture<UcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
