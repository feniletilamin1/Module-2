export type UserType = {
    id: number,
    name: string,
    avatar: string,
    details: {
        city: string,
        company: string,
        position: string,
    }
}

export type UserInfo = {
    id: number,
    name: string,
}
