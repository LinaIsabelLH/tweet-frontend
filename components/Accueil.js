import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Accueil.module.css";
import Image from "next/image";

function Accueil() {
  return (
    <div>
      <div className={styles.main}>
        <FontAwesomeIcon
          className={styles.logo}
          icon={faTwitter}
          rotation={180}
          size="3x"
          style={{ color: "whitesmoke" }}
          href="/tweet"
        />
        <div className={styles.bottom}>
          <Image src="/oeuf.png" width={50} height={50} className={styles.oeuf}></Image>
          <div className={styles.user}>
            <span>John</span>
            <span>@JohnCena</span>
            <div ><button className={styles.button} >Logout</button></div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
