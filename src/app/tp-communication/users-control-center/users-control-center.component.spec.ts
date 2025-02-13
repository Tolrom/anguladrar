import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersControlCenterComponent } from './users-control-center.component';

describe('UsersControlCenterComponent', () => {
  let component: UsersControlCenterComponent;
  let fixture: ComponentFixture<UsersControlCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersControlCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersControlCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
