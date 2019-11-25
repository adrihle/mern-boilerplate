module.exports = {
    querySignIn: 'SELECT * FROM users WHERE email = ?',
    queryUploadUser: 'INSERT INTO users set ?',
    queryAllUsers: 'SELECT * FROM users'
}
