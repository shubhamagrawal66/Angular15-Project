import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DHostListnersComponent } from './d-host-listners.component';

describe('DHostListnersComponent', () => {
  let component: DHostListnersComponent;
  let fixture: ComponentFixture<DHostListnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DHostListnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DHostListnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
