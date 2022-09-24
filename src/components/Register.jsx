import React, { useState } from 'react';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    
    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //   onChange={(e) => setEmail(e.target.value)} is a controlled input field
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
            <button type="submit">Register</button>
        </form>
        </div>
    );
    }
      
    export default Register; // export the Register component so we can use it in other files