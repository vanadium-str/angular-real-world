import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUserSelector } from 'src/app/store/selectors/flags.selectors';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.loginUser$.subscribe((value) => {
      if(value === true){
        this.myArticles = true;
        console.log(value);
      }else{
        this.myArticles = false;
      }
    })
  }

  loginUser$ = this.store.select(loginUserSelector);
  myArticles: boolean;

}
