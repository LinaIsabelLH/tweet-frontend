import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Accueil.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from '../reducers/user';

function Accueil() {

  const dispatch = useDispatch();

  const handleLogout = () => {
		dispatch(logout());
		window.location.assign("/");
	};

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
            <div ><button className={styles.button} onClick={() => handleLogout()}>Logout</button></div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
