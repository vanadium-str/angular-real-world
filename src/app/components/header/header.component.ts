import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUserSelector } from 'src/app/store/selectors/flags.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  loginUser$ = this.store.select(loginUserSelector);

}
