import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetUser } from 'src/app/store/actions/user-data.actions';
import { getUserSelector } from 'src/app/store/selectors/user-data.selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  User = {
    user: {
      email: '',
      password: ''
    }
  };

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
      this.User.user = value;
      console.log(this.User);
      this.store.dispatch(new GetUser(this.User))
      this.user$.subscribe((data) => console.log(data))
    }    
  }

}
