/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts"/>
var User_1 = require("../../src/models/User");
var UsersRepository_1 = require("../../src/repository/UsersRepository");
describe('UsersRepository', function () {
    describe('#add', function () {
        it('should add user and return user id', function () {
            var user = new User_1.User();
            user.username = 'Spider';
            var repo = new UsersRepository_1.UsersRepository();
            var userId = repo.add(user);
        });
    });
});
