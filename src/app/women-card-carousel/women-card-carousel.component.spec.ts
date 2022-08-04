import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCardCarouselComponent } from './women-card-carousel.component';

describe('WomenCardCarouselComponent', () => {
  let component: WomenCardCarouselComponent;
  let fixture: ComponentFixture<WomenCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenCardCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
