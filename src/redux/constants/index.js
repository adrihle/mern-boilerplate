//rest api urls
export const urlAPI_UPLOAD_USER = 'http://192.168.1.75:4000/newUser'
export const urlAPI_UPLOAD_USER_IMAGE = 'http://192.168.1.75:4000/newUserImage'
export const urlAPI_CHECK_EMAIL = 'http://192.168.1.75:4000/checkEmails'
export const urlAPI_SIGN_IN = 'http://192.168.1.75:4000/login'
//url images
export const USERLESS_AVATAR = 'http://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png'
//error messages
export const MSG_EMAIL_EXIST = {
    title: 'Email already registered',
    content: 'The email adress already exists, please try with another one'
}
export const MSG_UPLOAD_ERROR = {
    title: 'Uploading error ocurred',
    content: 'A error uploading a new user ocurred, please check your internet connection'
}
export const MSG_WRONG_USER = {
    title: 'Incorrect email',
    content: 'The email adress doesnt belong to any user'
}
export const MSG_WRONG_PASSWORD = {
    title: 'Incorrect password',
    content: 'Try with another password'
}
//sign in user
export const SIGN_IN_REQUEST = 'SIGN_USER_REQUEST'
export const INCORRECT_USERNAME = 'INCORRECT_USERNAME'
export const INCORRECT_PASSWORD = 'INCORRECT_PASSWORD'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_RESET = 'SING_IN_RESET'
//upload new user actions
export const UPLOAD_USER_REQUEST = 'UPLOAD_USER_REQUEST'
export const USER_UPLOADED = 'USER_UPLOADED'
export const UPLOAD_USER_ERROR = 'UPLOAD_USER_ERROR'
export const UPLOAD_USER_RESET = 'UPLOAD_USER_RESET'
export const UPLOAD_USER_IMAGE_REQUEST = 'UPLOAD_USER_IMAGE_REQUEST'
export const USER_IMAGE_UPLOADED = 'USER_IMAGE_UPLOADED'
export const UPLOAD_USER_IMAGE_ERROR = 'UPLOAD_USER_IMAGE_ERROR'
export const EMAIL_ALREADY_REGISTERED = 'EMAIL_ALREADY_REGISTERED'
