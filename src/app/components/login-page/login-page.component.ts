import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUserDetails, IUserRequest } from 'src/app/models/model-user';
import { GetUser } from 'src/app/store/actions/user-data.actions';
import { LoginUser } from 'src/app/store/actions/flags.actions';
import { getUserSelector } from 'src/app/store/selectors/user-data.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  user = {
    user: {
      email: '',
      password: ''
    }
  };
  registeredUser: IUserDetails;

  form = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  user$ = this.store.select(getUserSelector);

  onSubmit(value: any){
    if(value.email === ''){
      alert('Please add email');
    }else if(value.password === ''){
      alert('Please add password');
    }else{
      this.user.user = value;
      console.log(this.user);
      this.store.dispatch(new GetUser(this.user))
      this.user$.subscribe((data) => {
        console.log(data);
        this.registeredUser = data;
        console.log(this.registeredUser);
        if(this.registeredUser.token){
          this.store.dispatch(new LoginUser);
          this.router.navigate(['/']);
        }
      })
    }    
  }

}
