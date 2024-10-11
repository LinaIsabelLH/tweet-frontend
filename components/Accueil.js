import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Accueil.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../reducers/user';
import {useRouter} from 'next/router';

function Accueil() {

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  const handleLogout = () => {
		dispatch(logout());
		router.push("/");
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
          href="/tweets"
        />
        <div className={styles.bottom}>
          <Image src="/oeuf.png" width={50} height={50} className={styles.oeuf}></Image>
          <div className={styles.user}>
            <span>{user.firstname} </span>
            <span> @{user.username} </span>
          <div ><button className={styles.button} onClick={() => handleLogout()}>Logout</button></div> 
      </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
