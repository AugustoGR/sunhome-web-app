import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';
import { CredentialService } from 'src/app/shared/services/credential.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public showPassword = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly credentialService: CredentialService,
    private readonly router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {

      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      const login = new Login({ UserName: username, Password: password });

      this.credentialService.login(login).subscribe(() => {
        this.router.navigate(['/landing']);
      })
    }
  }

  public ngOnInit(): void {
    if (this.credentialService.isLoggedIn()) {
      this.router.navigate(['/landing']);
    }
  }

}
