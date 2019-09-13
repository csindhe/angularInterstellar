import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfsPagenotfoundComponent } from './lfs-pagenotfound.component';

describe('LfsPagenotfoundComponent', () => {
  let component: LfsPagenotfoundComponent;
  let fixture: ComponentFixture<LfsPagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfsPagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfsPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
