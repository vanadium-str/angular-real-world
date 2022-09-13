import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserDetails } from './models/model-user';
import { loginUserSelector } from './store/selectors/flags.selectors';
import { getUserSelector } from './store/selectors/user-data.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.user$.subscribe((value) => {
      this.user = value;
    })
  }

  loginUser$ = this.store.select(loginUserSelector);
  user$ = this.store.select(getUserSelector);
  user: IUserDetails;

}
