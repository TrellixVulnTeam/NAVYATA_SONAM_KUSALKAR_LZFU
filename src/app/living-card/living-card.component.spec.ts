import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingCardComponent } from './living-card.component';

describe('LivingCardComponent', () => {
  let component: LivingCardComponent;
  let fixture: ComponentFixture<LivingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
