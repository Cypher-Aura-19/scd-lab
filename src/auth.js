const users = {};

function registerUser(username, password) {
    if (users[username]) return false;
    users[username] = password;
    return true;
}

function authenticateUser(username, password) {
    return users[username] && users[username] === password;
}

module.exports = { registerUser, authenticateUser };
