import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsperityRatingComponent } from './prosperity-rating.component';

describe('ProsperityRatingComponent', () => {
  let component: ProsperityRatingComponent;
  let fixture: ComponentFixture<ProsperityRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsperityRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsperityRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
