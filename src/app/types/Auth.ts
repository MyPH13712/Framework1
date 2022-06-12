export type TypeLogin = {
    email: string,
    password: string,
}
export type TypeLogResponse = {
    token: string,
    user: {
        id:number
        email: string,
        name: string,
        role: number
    }
}
export type User = {
    _id: string,
    name: string,
    email: string,
    role: number
}