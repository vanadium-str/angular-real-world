import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IArticle } from 'src/app/models/model-article';
import { articlesSelector } from 'src/app/store/selectors/articles.selectors';

@Component({
  selector: 'app-follow-user',
  templateUrl: './follow-user.component.html',
  styleUrls: ['./follow-user.component.css']
})
export class FollowUserComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.articles$.subscribe((data) => {
      this.article = data.articles[this.index];    
    })
  }

  @Input() white: boolean;
  @Input() index: number;

  articles$ = this.store.select(articlesSelector);
  article: IArticle;

}
