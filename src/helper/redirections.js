//import history from './history';

const checkAuth = () => !JSON.parse(localStorage.getItem('token'));

export default checkAuth;
