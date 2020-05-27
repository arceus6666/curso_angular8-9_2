import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecetasChildComponent } from './lista-recetas-child.component';

describe('ListaRecetasChildComponent', () => {
  let component: ListaRecetasChildComponent;
  let fixture: ComponentFixture<ListaRecetasChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRecetasChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecetasChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
