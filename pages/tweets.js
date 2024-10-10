import Accueil from "../components/Accueil";
import Tweet from "../components/Tweet";
import Trends from "../components/Trends";
import styles from "../styles/Tweet.module.css";

function Tweets() {
  return (
    <div className={styles.body}>
      <Accueil />
      <Tweet />
      <Trends/>
    </div>
  );
}

export default Tweets;
