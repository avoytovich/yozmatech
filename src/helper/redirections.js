//import history from './history';

const checkAuth = () => !JSON.parse(localStorage.getItem('login'));

export default checkAuth;
