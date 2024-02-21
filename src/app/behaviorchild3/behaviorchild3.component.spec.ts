import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviorchild3Component } from './behaviorchild3.component';

describe('Behaviorchild3Component', () => {
  let component: Behaviorchild3Component;
  let fixture: ComponentFixture<Behaviorchild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviorchild3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behaviorchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
