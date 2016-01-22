/// <reference path="../../../typings/tsd.d.ts"/>

import * as chai from 'chai';
import {User} from '../../main/app/models/user';
import {UsersRepository} from '../../main/app/repository/usersRepository';

describe('UsersRepository', () => {
    describe('#add', () => {
        it('should add user and return user by id', () => {
            // given
            let expectedUsername: string = 'Spider';

            let user: User = new User();
            user.username = expectedUsername;

            // when
            let usersRepo: UsersRepository = new UsersRepository();
            let userId: string = usersRepo.add(user);

            // then
            let foundUser: User = usersRepo.findById(userId);
            chai.expect(foundUser.id)
                .is
                .eq(userId);

            chai.expect(foundUser.username)
                .is
                .eq(expectedUsername);
        });
    })
});
