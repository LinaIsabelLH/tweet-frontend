import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Login() {
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
        <button className={styles.signup}>Sign up</button>
        <h5>Already have an account?</h5>
        <button className={styles.signin}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
