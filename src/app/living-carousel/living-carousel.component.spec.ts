import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingCarouselComponent } from './living-carousel.component';

describe('LivingCarouselComponent', () => {
  let component: LivingCarouselComponent;
  let fixture: ComponentFixture<LivingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
