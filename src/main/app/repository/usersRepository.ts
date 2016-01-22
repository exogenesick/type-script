import { Repository } from './repository'
import { User } from '../models/user'

export class UsersRepository implements Repository<User> {
    private usersStorage: Array<User> = new Array<User>();

    findById(userId: string): User {
        var foundUser: User = _.find(this.usersStorage, (user: User) => {
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
