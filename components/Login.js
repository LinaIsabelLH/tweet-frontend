import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Modal } from "antd";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const [isModalOpenSignUp, setIsModalOpenSignUp] = useState(false);
  const [isModalOpenSignIn, setIsModalOpenSignIn] = useState(false);
  const dispatch = useDispatch();

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signUpModal = () => {
    setIsModalOpenSignUp(true);
  };

  const signInModal =()=>{
    setIsModalOpenSignIn(true);
  }

    const handleRegister = () => {
      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            dispatch(login({ username: signUpUsername, token: data.token }));
            setSignUpFirstname('');
            setSignUpUsername('');
            setSignUpPassword('');
            setIsModalOpenSignUp(false);
    } } )};

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
            setIsModalOpenSignIn(false);
          }
        });
    };
  
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
        <Modal open={isModalOpenSignUp}>
          <SignUp handleRegister={handleRegister} />
        </Modal>
        <h5>Already have an account?</h5>
        <button onClick={() => signInModal()}className={styles.signin}>Sign in</button>
        <Modal open={isModalOpenSignIn}>
          <SignIn handleConnection={handleConnection} />
        </Modal>
      </div>
    </div>
  );
}

export default Login;
