import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCardComponent } from './men-card.component';

describe('MenCardComponent', () => {
  let component: MenCardComponent;
  let fixture: ComponentFixture<MenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
