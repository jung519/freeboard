import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceAddComponent } from './sequence-add.component';

describe('SequenceAddComponent', () => {
  let component: SequenceAddComponent;
  let fixture: ComponentFixture<SequenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
