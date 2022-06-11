import instance from './settings';
import Cookies from 'js-cookie';

const register = (object) => {
    return instance.post("email/register", object)
}
const login = (object) => {
    return instance.post("email/login", object)
}
const getMe = () => {
    return instance.get('me')
}
const services = {
    register,
    login,
    getMe
}

export default services;
