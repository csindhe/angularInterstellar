import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfsHomeComponent } from './lfs-home.component';

describe('LfsHomeComponent', () => {
  let component: LfsHomeComponent;
  let fixture: ComponentFixture<LfsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
