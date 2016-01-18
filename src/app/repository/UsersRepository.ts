import { Repository } from './Repository'
import * as uuid from 'uuid';
import * as _ from 'underscore';
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
        user.id = uuid.v4();
        this.usersStorage.push(user);

        return user.id;
    }
}
