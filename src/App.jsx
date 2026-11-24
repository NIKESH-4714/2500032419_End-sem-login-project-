import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [registered, setRegistered] = useState(false);

  function register(e) {
    e.preventDefault();
    setRegistered(true);
    setMessage('Registration successful!');
  }

  function login(e) {
    e.preventDefault();

    if (registered && email === loginEmail && password === loginPassword) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password!');
    }
  }

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <div className="container">
      <h1>Login and Registration</h1>

      <h2>Register</h2>
      <form onSubmit={register}>
        <input placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email" type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>

      {registered && (
        <p>Registered Details: {name}, {email}</p>
      )}

      <h2>Login</h2>
      <form onSubmit={login}>
        <input placeholder="Email" type="email" value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;