import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitAccordionComponent } from './accordion.component';

describe('KitAccordionComponent', () => {
  let component: KitAccordionComponent;
  let fixture: ComponentFixture<KitAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
