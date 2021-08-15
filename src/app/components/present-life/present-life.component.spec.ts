import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentLifeComponent } from './present-life.component';

describe('PresentLifeComponent', () => {
  let component: PresentLifeComponent;
  let fixture: ComponentFixture<PresentLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
