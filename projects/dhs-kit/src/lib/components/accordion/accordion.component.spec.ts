import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhsAccordionComponent } from './accordion.component';

describe('DhsAccordionComponent', () => {
  let component: DhsAccordionComponent;
  let fixture: ComponentFixture<DhsAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhsAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
