export type TypeLogin = {
    email: string,
    password: string,
}
export type TypeLogResponse = {
    token: string,
    user: {
        id:number
        email: string
    }
}