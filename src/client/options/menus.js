import { signInReset } from '../../redux/actions/sign-in-action'

const menu = (title, route, logout, action) => {
    return {title, route, logout, action}
}

export const navbarMenu = [
    menu('Profile', '/home'),
    menu('Logout', '/login', true, signInReset)
]