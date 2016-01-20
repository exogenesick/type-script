import { Repository } from './Repository'
import { User } from '../models/User'

export class UsersRepository implements Repository<User> {
    private usersStorage: Array<User> = new Array<User>();

    findById(userId: string): User {
        var foundUser: User = _.find(this.usersStorage, (user) => {
            return user.id === userId;
        });

        if (!foundUser) {
            throw new Error('No user found');
        }

        return foundUser;
    }

    add(user: User): string {
        this.usersStorage.push(user);

        return user.id;
    }
}
