import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IArticle } from 'src/app/models/model-article';
import { VariablesService } from 'src/app/services/variables.service';
import { GetAllArticles } from 'src/app/store/actions/articles.action';
import { articlesSelector } from 'src/app/store/selectors/articles.selectors';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  constructor(
    private store: Store,
    private variablesService: VariablesService
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

  setIndex(index: number){
    this.variablesService.setIndex(index);
  }

}
