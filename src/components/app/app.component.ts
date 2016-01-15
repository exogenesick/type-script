import { User } from '../../models/user';

export class App {
    private usersRepository: Array<User>;
    constructor(repositoryName: String) {
        this.usersRepository = new Array<User>();
    }

    addUser(user: User) {
        this.usersRepository.push(user);
    }
}
