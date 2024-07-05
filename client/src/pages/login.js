import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import Alert from '../component/alert';
import { useRouter } from 'next/router';
import withAuthRedirect from '../component/withAuthRedirect';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { error, status } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }))
    .unwrap()
    .then((data)=>{
      setAlert({ message: 'Login successful!', type: 'success' });
        console.log('Login successful:', data);
        router.push('/api/auth/profile');
    })
    .catch((err)=>{
      setAlert({ message: 'Your email or password is incorrect', type: 'error' });
      console.error('Login failed:', err);
    })
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {alert && <Alert message={alert.message} type={alert.type} />}
    </div>
  );
}   

export default withAuthRedirect(Login);