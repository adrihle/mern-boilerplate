module.exports = {
    querySignIn: 'SELECT * FROM users WHERE email = ?',
    queryUploadUser: 'INSERT INTO users set ?',
    queryCheckEmail: 'SELECT * FROM users WHERE email = ?'
}
