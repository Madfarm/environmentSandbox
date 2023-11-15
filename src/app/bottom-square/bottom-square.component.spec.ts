import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSquareComponent } from './bottom-square.component';

describe('BottomSquareComponent', () => {
  let component: BottomSquareComponent;
  let fixture: ComponentFixture<BottomSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
