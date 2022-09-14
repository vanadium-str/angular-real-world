import { IArticlesState } from "src/app/models/model-article";
import { ArticlesActions, EArticlesActions } from "../actions/articles.action";

export type Action = ArticlesActions;

const initialState: IArticlesState = {
    articles: {
      articles: [],
      articlesCount: -1
    }
}

export const articlesReducer = (state = initialState, action: Action): IArticlesState => {
    switch(action.type) {
        case EArticlesActions.GetAllArticlesSuccess: {
            return {
                ...state,
                articles: action.payload,
            }
        }
        case EArticlesActions.GetFeedArticlesSuccess: {
            return {
                ...state,
                articles: action.payload,
            }
        }
        default:
            return state;
    }
}