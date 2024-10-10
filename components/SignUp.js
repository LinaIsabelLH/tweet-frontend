import { Modal } from 'antd';
import styles from '../styles/signup.module.css';

export default function signUp(){

    return (
        <div className={styles.singUpContainer}>
            <h1>Create your Hackatweet account</h1>
            <input type="text" placeholder="Firstname" id="signUpFirstname" value={signInFirstname} onChange={(e) => setSignUpFirstname(e.target.value)}></input>
            <input type="text" placeholder="Username" id="signUpUsername" value={signInUsername} onChange={(e) => setSignUpUsername(e.target.value)}></input>
            <input type="text" placeholder="Password" id="signUpPassword" value={signInPassword} onChange={(e) => setSignUpPassword(e.target.value)}></input>
            <button id="register" onClick={() => handleRegister()}>Sign Up</button>
        </div>
    )

};