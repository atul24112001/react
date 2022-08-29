import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../Store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const context = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const entaredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6F2k8_BbiuwHPyoIW7h53Xy5WTv3umGc";

    } else {
      url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6F2k8_BbiuwHPyoIW7h53Xy5WTv3umGc";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
         password: entaredPassword,
          returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async res => {
      if(res.ok){
        return res.json();
      } else {
         return await res.json().then(data => {
            throw new Error(data.error.message)
         });
      }
    }).then(data => {
      const enpirationTime = new Date(new Date().getTime() + ((+data.expiresIn) * 1000));
      context.LogIn(data.idToken, enpirationTime.toISOString());
      history.replace("/")
    }).catch(err => {
      alert(err.message);
    })
    setIsLoading(false);
    passwordInputRef.current.value = "";
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
