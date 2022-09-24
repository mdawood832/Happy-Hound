  import React, { useState } from 'react';

 
 
  const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the page from refreshing
        console.log(email, password); // log the email and password to the console
    };

    
    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    };
     
    export default Login;
     
     

 