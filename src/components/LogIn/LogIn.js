import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React from 'react';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true})
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin: '20px'}}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default LogIn;