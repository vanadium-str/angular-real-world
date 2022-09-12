import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterUser } from 'src/app/store/actions/user-data.actions';
import { getUserSelector } from 'src/app/store/selectors/user-data.selectors';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  User = {
    user: {
      email: '',
      password: '',
      username: ''
    }
  };

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
      this.User.user = value;
      console.log(this.User);
      this.store.dispatch(new RegisterUser(this.User))
      this.user$.subscribe((data) => console.log(data))
    } 
  }

}
