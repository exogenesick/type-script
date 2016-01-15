"use strict";
var App = (function () {
    function App(repositoryName) {
        this.usersRepository = new Array();
    }
    App.prototype.addUser = function (user) {
        this.usersRepository.push(user);
    };
    return App;
}());
exports.App = App;
