import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDecoratorsComponent } from './c-decorators.component';

describe('CDecoratorsComponent', () => {
  let component: CDecoratorsComponent;
  let fixture: ComponentFixture<CDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDecoratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
