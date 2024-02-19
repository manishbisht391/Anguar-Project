import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested5Component } from './nested-5.component';

describe('Nested5Component', () => {
  let component: Nested5Component;
  let fixture: ComponentFixture<Nested5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
