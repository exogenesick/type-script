import { Repository } from './repository';
import { User } from '../models/user';
import { Guid } from '../services/guid';

export class UsersRepository implements Repository<User> {
    private usersStorage: Array<User> = new Array<User>();

    add(username: string): string {
        let user: User = new User();
        user.id = Guid.MakeNew().ToString();
        user.username = username;

        this.usersStorage.push(user);

        return user.id;
    }

    findById(userId: string): User {
        let user: User = this.searchForUser(userId);

        if (!user) {
            throw new Error('No user found');
        }

        return user;
    }

    size(): number {
        return this.usersStorage.length;
    }

    private searchForUser(userId: string):User {
        const size:number = this.size();

        for (let i = 0; i < size; i++) {
            if (this.usersStorage[i].id === userId) {
                return this.usersStorage[i];
            }
        }

        return null;
    }
}
