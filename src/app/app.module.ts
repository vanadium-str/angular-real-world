import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GetUserEffects } from './store/effects/user-data.effects';
import { appReducers } from './store';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesEffects } from './store/effects/articles.effects';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';
import { MyArticlesComponent } from './components/my-articles/my-articles.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { FollowUserComponent } from './components/follow-user/follow-user.component';
import { CommentsEffects } from './store/effects/comments.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MainPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ArticlesPageComponent,
    AllArticlesComponent,
    MyArticlesComponent,
    ShowArticleComponent,
    FollowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([GetUserEffects, ArticlesEffects, CommentsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
