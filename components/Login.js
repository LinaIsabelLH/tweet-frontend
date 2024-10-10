import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Modal } from "antd";
import signUp from "./SignUp";

// import { Modal } from 'antd';

function Login() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const signUpModal = () => {
      setIsModalOpen(true);
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
            setSignUpUsername('');
            setSignUpPassword('');




      setIsModalOpen(false);
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
        <h1 className={styles.titre}>See what's <div>happening</div></h1>
        <h3>Join Hackatweet today.</h3>
        <button onClick={() => signUpModal()} className={styles.signup}>Sign up</button>
        <Modal title="Basic Modal" open={isModalOpen} >
          <signUp handleRegister={handleRegister}/>
        </Modal>
        <h5>Already have an account?</h5>
        <button className={styles.signin}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
