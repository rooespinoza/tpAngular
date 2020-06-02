import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaProductosComponent } from './grilla-productos.component';

describe('GrillaProductosComponent', () => {
  let component: GrillaProductosComponent;
  let fixture: ComponentFixture<GrillaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
