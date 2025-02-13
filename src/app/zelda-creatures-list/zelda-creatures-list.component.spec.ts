import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeldaCreaturesListComponent } from './zelda-creatures-list.component';

describe('ZeldaCreaturesListComponent', () => {
  let component: ZeldaCreaturesListComponent;
  let fixture: ComponentFixture<ZeldaCreaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeldaCreaturesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeldaCreaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
