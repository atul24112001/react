import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
import classes from './ProfileForm.module.css'; 

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const context = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA6F2k8_BbiuwHPyoIW7h53Xy5WTv3umGc", {
      method: "POST",
      body: JSON.stringify({
        idToken: context.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      context.LogOut();
      history.replace("/auth");
    }).catch(err =>  console.log(err.message))

    newPasswordInputRef.current.value = "";    
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordInputRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
