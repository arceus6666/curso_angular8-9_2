import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../modules/autenticacion/autenticacion.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currentUser: any;

  constructor(
    private router: Router,
    private auth: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

}
