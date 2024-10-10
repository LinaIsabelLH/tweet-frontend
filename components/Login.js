import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Modal } from "antd";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";
import { login } from '../reducers/user';


function Login() {

  const [isModalOpenSignUp, setIsModalOpenSignUp] = useState(false);
  const [isModalOpenSignIn, setIsModalOpenSignIn] = useState(false);

  
  const signUpModal = () => {
    setIsModalOpenSignUp(true);
  };

  const signInModal =()=>{
    setIsModalOpenSignIn(true);
  }

  
    return (
    <div className={styles.main}>
      <div className={styles.login}>
        <FontAwesomeIcon
          icon={faTwitter}
          rotation={180}
          size={"2xl"}
          style={{ color: "#ffffff" }}
        />
        <h1 className={styles.titre}>
          See what's <div>happening</div>
        </h1>
        <h3>Join Hackatweet today.</h3>
        <button onClick={() => signUpModal()} className={styles.signup}>
          Sign up
        </button>
        <Modal open={isModalOpenSignUp} footer={null} closeIcon={null}>
          <SignUp />
        </Modal>
        <h5>Already have an account?</h5>
        <button onClick={() => signInModal()}className={styles.signin}>Sign in</button>
        <Modal open={isModalOpenSignIn} footer={null} closeIcon={null}>
          <SignIn />
        </Modal>
      </div>
    </div>
  );
}

export default Login;
