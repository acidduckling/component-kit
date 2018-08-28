import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhsHeaderComponent } from './header.component';

describe('DhsHeaderComponent', () => {
  let component: DhsHeaderComponent;
  let fixture: ComponentFixture<DhsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
