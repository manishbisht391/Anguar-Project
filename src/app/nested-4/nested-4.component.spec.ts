import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested4Component } from './nested-4.component';

describe('Nested4Component', () => {
  let component: Nested4Component;
  let fixture: ComponentFixture<Nested4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
