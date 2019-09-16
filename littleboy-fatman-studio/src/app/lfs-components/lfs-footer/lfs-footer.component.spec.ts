import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfsFooterComponent } from './lfs-footer.component';

describe('LfsFooterComponent', () => {
  let component: LfsFooterComponent;
  let fixture: ComponentFixture<LfsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
