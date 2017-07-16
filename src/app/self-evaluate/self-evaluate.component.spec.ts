import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEvaluateComponent } from './self-evaluate.component';

describe('SelfEvaluateComponent', () => {
  let component: SelfEvaluateComponent;
  let fixture: ComponentFixture<SelfEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
