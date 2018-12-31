import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitHeaderBrandComponent } from './header-brand.component';

describe('KitHeaderBrandComponent', () => {
  let component: KitHeaderBrandComponent;
  let fixture: ComponentFixture<KitHeaderBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitHeaderBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitHeaderBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
