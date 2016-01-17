var UsersRepository = (function () {
    function UsersRepository() {
        this.usersStorage = new Array();
    }
    UsersRepository.prototype.findById = function (userId) {
        var foundUser = null;
        this.usersStorage.some(function (user) {
            var isFound = false;
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
    };
    UsersRepository.prototype.add = function (user) {
        user.id = '78234567834';
        this.usersStorage.push(user);
        return user.id;
    };
    return UsersRepository;
})();
exports.UsersRepository = UsersRepository;
