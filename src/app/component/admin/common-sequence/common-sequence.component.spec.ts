import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSequenceComponent } from './common-sequence.component';

describe('CommonSequenceComponent', () => {
  let component: CommonSequenceComponent;
  let fixture: ComponentFixture<CommonSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
