import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo-angular',
  templateUrl: './hola-mundo-angular.component.html',
  styleUrls: ['./hola-mundo-angular.component.css']
})
export class HolaMundoAngularComponent implements OnInit {

  mensaje = "Hola mundo"

  constructor() { }

  ngOnInit(): void {
  }

}
