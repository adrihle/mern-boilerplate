module.exports = {
    querySignIn: 'SELECT pass FROM users WHERE email = ?',
    queryUploadUser: 'INSERT INTO users set ?',
    queryCheckEmail: 'SELECT * FROM users WHERE email = ?'
}
