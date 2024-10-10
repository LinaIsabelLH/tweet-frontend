import { Modal } from "antd";
import styles from "../styles/signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  return (
    <div className={styles.singUpContainer}>
      <FontAwesomeIcon
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
      //  value={signInFirstname}
        onChange={(e) => setSignUpFirstname(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Username"
        id="signUpUsername"
       // value={signInUsername} 
        onChange={(e) => setSignUpUsername(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Password"
        id="signUpPassword"
       // value={signInPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
      ></input>
      <button id="register" onClick={() => handleRegister()}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
