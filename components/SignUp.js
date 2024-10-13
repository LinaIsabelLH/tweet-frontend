import { Modal } from "antd";
import styles from "../styles/signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../reducers/user';
import {useRouter} from 'next/router';


function SignUp() {
  
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.result) {
          dispatch(login({firstname: signUpFirstname, username: signUpUsername, token: data.token }));
          setSignUpFirstname('');
          setSignUpUsername('');
          setSignUpPassword('');
          router.push("/tweets")
  } } ) }


  return (
    <div className={styles.singUpContainer}>
      <FontAwesomeIcon
          className={styles.logo}
          icon={faTwitter}
          rotation={180}
          size={"2xl"}
          style={{ color: "#ffffff" }}
        />
      <h1>Create your Hackatweet account</h1>
      <input
        type="text"
        placeholder="Firstname"
        id="signUpFirstname"
        value={signUpFirstname}
        onChange={(e) => setSignUpFirstname(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Username"
        id="signUpUsername"
        value={signUpUsername} 
        onChange={(e) => setSignUpUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        id="signUpPassword"
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
      ></input>
      <button id="register" onClick={() => handleRegister()}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
