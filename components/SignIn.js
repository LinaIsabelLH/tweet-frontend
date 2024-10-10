import { Modal } from "antd";
import styles from "../styles/signin.module.css";

export default function SignIn() {
  return (
    <div className={styles.signInContainer}>
      <h1>Connect to Hackatweet</h1>
      <input
        type="text"
        placeholder="Username"
        id="signInUsername"
        // value={signInUsername}
        onChange={(e) => setSignInUsername(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Password"
        id="signInPassword"
        // value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      ></input>
      <button id="connection" onClick={() => handleConnection()}>
        Sign In
      </button>
    </div>
  );
}
