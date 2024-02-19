import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested3Component } from './nested-3.component';

describe('Nested3Component', () => {
  let component: Nested3Component;
  let fixture: ComponentFixture<Nested3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
