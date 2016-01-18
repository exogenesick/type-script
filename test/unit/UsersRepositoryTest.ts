import * as chai from 'chai';
import {User} from '../../src/models/User';
import {UsersRepository} from '../../src/repository/UsersRepository';

describe('UsersRepository', () => {
    describe('#add', () => {
        it('should add user and return user by id', () => {
            // given
            let user: User = new User();
            user.username = 'Spider';

            // when
            let usersRepo: UsersRepository = new UsersRepository();
            let userId: string = usersRepo.add(user);

            // then
            let foundUser: User = usersRepo.findById(userId);
            chai.expect(foundUser.id)
                .is
                .eq(userId);
        });
    })
});
