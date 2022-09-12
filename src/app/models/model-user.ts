export interface IUser {
    user: {
        email: string,
        token: string,
        username: string,
        bio: string,
        image: string
    }
}

export interface IUserRequest {
    user: {
        email: string,
        password: string,
        username?: string
    }
}
