import { signInReset } from '../../redux/actions/sign-in-action'

const generateMenu = (title, route, logout, action) => {
    return {title, route, logout, action}
}

export const navbarMenu = [
    generateMenu('Profile', '/home'),
    generateMenu('Logout', '/login', true, signInReset)
]