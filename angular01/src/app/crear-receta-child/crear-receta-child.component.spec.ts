import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecetaChildComponent } from './crear-receta-child.component';

describe('CrearRecetaChildComponent', () => {
  let component: CrearRecetaChildComponent;
  let fixture: ComponentFixture<CrearRecetaChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRecetaChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecetaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
