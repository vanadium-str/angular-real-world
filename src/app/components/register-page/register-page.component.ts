import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserDetails } from 'src/app/models/model-user';
import { LoginUser } from 'src/app/store/actions/flags.actions';
import { RegisterUser } from 'src/app/store/actions/user-data.actions';
import { getUserSelector } from 'src/app/store/selectors/user-data.selectors';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  user = {
    user: {
      email: '',
      password: '',
      username: ''
    }
  };
  registeredUser: IUserDetails;

  form = new FormGroup({
    username: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  user$ = this.store.select(getUserSelector);

  onSubmit(value: any){
    if(value.email === ''){
      alert('Please add email');
    }else if(value.password === ''){
      alert('Please add password');
    }else if(value.username === ''){
      alert('Please add username');
    }else{
      this.user.user = value;
      console.log(this.user);
      this.store.dispatch(new RegisterUser(this.user))
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
