export interface IUser {
    user: IUserDetails
}

export interface IUserDetails {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string
}

export interface IUserRequest {
    user: {
        email: string,
        password: string,
        username?: string
    }
}
