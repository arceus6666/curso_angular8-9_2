import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarUsuarioConfirmacionComponent } from './borrar-usuario-confirmacion.component';

describe('BorrarUsuarioConfirmacionComponent', () => {
  let component: BorrarUsuarioConfirmacionComponent;
  let fixture: ComponentFixture<BorrarUsuarioConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarUsuarioConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarUsuarioConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
