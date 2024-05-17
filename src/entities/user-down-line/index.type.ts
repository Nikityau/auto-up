export type TUserDownLine = {
    id: string,
    isActive: boolean,
    name: string,
    traffic: number,
    memory: number
}

export type TUserFilter = 'all' | 'active'