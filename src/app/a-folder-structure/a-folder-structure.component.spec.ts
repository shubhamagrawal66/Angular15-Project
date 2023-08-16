import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFolderStructureComponent } from './a-folder-structure.component';

describe('AFolderStructureComponent', () => {
  let component: AFolderStructureComponent;
  let fixture: ComponentFixture<AFolderStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFolderStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFolderStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
