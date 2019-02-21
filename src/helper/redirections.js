import history from './history';

const checkAuth = () => (
  !sessionStorage.getItem('token') && history.push('/home')
);

export default checkAuth();
