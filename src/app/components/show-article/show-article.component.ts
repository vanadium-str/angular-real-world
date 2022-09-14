import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IArticle } from 'src/app/models/model-article';
import { IComment, IComments } from 'src/app/models/model-comments';
import { VariablesService } from 'src/app/services/variables.service';
import { GetComments } from 'src/app/store/actions/comments.actions';
import { articlesSelector } from 'src/app/store/selectors/articles.selectors';
import { commentsSelector } from 'src/app/store/selectors/comments.selectors';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  constructor(
    private variablesService: VariablesService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetComments());
    this.index = this.variablesService.getIndex();
    this.articles$.subscribe((data) => {
      this.article = data.articles[this.index];
      console.log(this.article);     
    })
    this.comments$.subscribe((data) => {
      this.comments = data.comments;
      console.log(this.comments);
       
    })
  }

  articles$ = this.store.select(articlesSelector);
  comments$ = this.store.select(commentsSelector);
  article: IArticle;
  white = true;
  index: number;
  comments: IComment[];

}
