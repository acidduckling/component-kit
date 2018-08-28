import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhsHeaderBrandComponent } from './header-brand.component';

describe('DhsHeaderBrandComponent', () => {
  let component: DhsHeaderBrandComponent;
  let fixture: ComponentFixture<DhsHeaderBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhsHeaderBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhsHeaderBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
