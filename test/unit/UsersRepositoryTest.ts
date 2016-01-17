/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts"/>

import chai = require('chai');

import {User} from "../../src/models/User";
import {UsersRepository} from "../../src/repository/UsersRepository";

describe('UsersRepository', () => {
  describe('#add', () => {
    it('should add user and return user id', () => {
      let user:User = new User();
      user.username = 'Spider';

      let repo:UsersRepository = new UsersRepository();
      let userId:string = repo.add(user);

      chai.expect(userId);
    });
  })
});
