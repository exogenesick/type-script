/// <reference path="../../typings/tsd.d.ts" />

import { it, describe, expect, beforeEach, inject } from 'angular2/testing';
import { User } from '../models/user';
import { UsersRepository } from './usersRepository';

describe('UsersRepository', () => {
    describe('#add', () => {
        it('should add user one user to empty repository and check repository size', () => {
            let usersRepo: UsersRepository = new UsersRepository();

            // when
            usersRepo.add('Spider');

            // then
            expect(usersRepo.size())
                .toEqual(1);
        });
    });

    describe('#findById', () => {
        it('should add user one user to repository and get this user by id', () => {
            // given
            const expectedUsername = 'Spider';

            let usersRepo: UsersRepository = new UsersRepository();
            let userId = usersRepo.add(expectedUsername);

            // when
            let user: User = usersRepo.findById(userId);

            // then
            expect(user.username)
                .toEqual(expectedUsername);
        });
    });
});
