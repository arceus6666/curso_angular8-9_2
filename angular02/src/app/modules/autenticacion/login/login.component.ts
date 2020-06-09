import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  returnUrl: string;

  constructor(
    private fromBuilder: FormBuilder,
    private auth: AutenticacionService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

    this.auth.logout();

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  enviar(): void {
    if (this.loginForm.invalid) { return; }
    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      }, error => {
        this.snackBar.open(error.error.mensaje, 'Ok', { duration: 2000 });
      });
  }

}
