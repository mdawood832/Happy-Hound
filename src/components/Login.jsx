   import React from 'react';




    
    const Login = () => {
        return(
            <div className='loginContainer'>
                <div className='loginForm'>
                    <h1>Sign In</h1>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
     
    export default Login;
    