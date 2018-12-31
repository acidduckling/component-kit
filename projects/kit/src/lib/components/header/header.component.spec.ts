import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitHeaderComponent } from './header.component';

describe('KitHeaderComponent', () => {
  let component: KitHeaderComponent;
  let fixture: ComponentFixture<KitHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
