import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl ({ value: 'tour@f.heroes', disabled: true },
    [Validators.email, Validators.required])
    ,
    password: new FormControl ('', [Validators.required, Validators.minLength(10)]),
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  onSubmit(): void {
    if(this.form.valid) {
      console.log(this.form.value);
      const{
        email, password
      } = this.form.getRawValue();
      this.authService.login({email: String(email), password: String(password)});
    }
  }
}
