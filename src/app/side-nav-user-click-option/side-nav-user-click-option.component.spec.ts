import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavUserClickOptionComponent } from './side-nav-user-click-option.component';

describe('SideNavUserClickOptionComponent', () => {
  let component: SideNavUserClickOptionComponent;
  let fixture: ComponentFixture<SideNavUserClickOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavUserClickOptionComponent]
    });
    fixture = TestBed.createComponent(SideNavUserClickOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
