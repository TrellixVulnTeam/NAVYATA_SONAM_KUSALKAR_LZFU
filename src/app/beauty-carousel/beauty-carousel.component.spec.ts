import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyCarouselComponent } from './beauty-carousel.component';

describe('BeautyCarouselComponent', () => {
  let component: BeautyCarouselComponent;
  let fixture: ComponentFixture<BeautyCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
