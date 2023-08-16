import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BModulesComponent } from './b-modules.component';

describe('BModulesComponent', () => {
  let component: BModulesComponent;
  let fixture: ComponentFixture<BModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
