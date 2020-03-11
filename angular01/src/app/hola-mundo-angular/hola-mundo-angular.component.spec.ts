import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaMundoAngularComponent } from './hola-mundo-angular.component';

describe('HolaMundoAngularComponent', () => {
  let component: HolaMundoAngularComponent;
  let fixture: ComponentFixture<HolaMundoAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaMundoAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaMundoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
