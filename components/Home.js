import styles from "../styles/Home.module.css";
import Image from "next/image";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.contentleft}>
          <FontAwesomeIcon
            icon={faTwitter}
            rotation={180}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className={styles.contentright}>
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default Home;
