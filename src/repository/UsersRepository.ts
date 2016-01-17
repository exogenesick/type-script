import { Repository } from './Repository'
import { User } from '../models/User'

export class UsersRepository implements Repository<User> {
  private usersStorage: Array<User> = new Array<User>();

  findById(userId:string):User {
    var foundUser:User = null;

    this.usersStorage.some(user => {
      let isFound:boolean = false;
      if (userId === user.id) {
        foundUser = user;
        isFound = true;
      }
      return isFound;
    });

    if (!foundUser) {
      throw new Error('No user found');
    }

    return foundUser;
  }

  add(user:User):string {
    user.id = '78234567834';
    this.usersStorage.push(user);

    return user.id;
  }
}
