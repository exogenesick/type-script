export interface Repository<T> {
    findById(userId: string): T
    add(user: T): string
}
