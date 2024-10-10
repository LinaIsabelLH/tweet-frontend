import { Modal } from "antd";
import styles from "../styles/signin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../reducers/user';




export default function SignIn() {
    
  
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const dispatch = useDispatch();


    const handleConnection = () => {

        fetch('http://localhost:3000/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
          .then(data => {
            if (data.result) {
              dispatch(login({ username: signInUsername, token: data.token }));
              setSignInUsername('');
              setSignInPassword('');
              window.location.assign("/tweets")
            }
          }) }
      

  return (
    <div className={styles.signInContainer}>
      <FontAwesomeIcon
          className={styles.logo}
          icon={faTwitter}
          rotation={180}
          size={"2xl"}
          style={{ color: "#ffffff" }}
        />
      <h1>Connect to Hackatweet</h1>
      <input
        type="text"
        placeholder="Username"
        id="signInUsername"
        value={signInUsername}
        onChange={(e) => setSignInUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        id="signInPassword"
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      ></input>
      <button id="connection" onClick={() => handleConnection()}>
        Sign In
      </button>
    </div>
  );
}
