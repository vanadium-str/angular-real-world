export interface IComments {
    comments: IComment[]
}

export interface IComment {
    id: number,
    createdAt: string,
    updatedAt: string,
    body: string,
    author: {
      username: string,
      bio: string,
      image: string,
      following: boolean
    }
}

export interface ICommentsState {
  comments: IComments
}