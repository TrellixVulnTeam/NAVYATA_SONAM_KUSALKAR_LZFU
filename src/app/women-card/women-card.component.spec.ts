import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCardComponent } from './women-card.component';

describe('WomenCardComponent', () => {
  let component: WomenCardComponent;
  let fixture: ComponentFixture<WomenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
