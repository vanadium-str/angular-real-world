import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IArticle } from 'src/app/models/model-article';
import { GetAllArticles } from 'src/app/store/actions/articles.action';
import { articlesSelector } from 'src/app/store/selectors/articles.selectors';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllArticles())
    this.articles$.subscribe((data) => {
      console.log(data);
      this.articles = data.articles
      console.log(this.articles);
    })
  }

  articles$ = this.store.select(articlesSelector);
  articles: IArticle[];

}
