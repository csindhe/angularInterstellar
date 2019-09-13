import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbfmHomeComponent } from './lbfm-home.component';

describe('LbfmHomeComponent', () => {
  let component: LbfmHomeComponent;
  let fixture: ComponentFixture<LbfmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbfmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbfmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
