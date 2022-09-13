import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IArticle } from 'src/app/models/model-article';
import { GetFeedArticles } from 'src/app/store/actions/articles.action';
import { articlesSelector } from 'src/app/store/selectors/articles.selectors';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetFeedArticles())
    this.articles$.subscribe((data) => {
      console.log(data);
      this.articles = data.articles
      console.log(this.articles);
    })
  }

  articles$ = this.store.select(articlesSelector);
  articles: IArticle[];

}
