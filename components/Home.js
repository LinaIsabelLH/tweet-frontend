import styles from "../styles/Home.module.css";
import Image from "next/image";
import Login from "./Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.contentleft}>
          <Image className={styles.logo} src="/logotwitter.png" width={200} height={200} />
        </div>
        <div className={styles.contentright}>
          <Login></Login>
        </div>
      </main>
    </div>
  );
}

export default Home;
