export interface Repository<T> {
    findById(userId: string): T
    add(username: string): string
}
