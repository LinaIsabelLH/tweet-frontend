import Accueil from "../components/Accueil";
import Tweet from "../components/Tweet";
import Trends from "../components/Trends";
import styles from "../styles/Tweet.module.css";
import LastTweet from "../components/LastTweets";

function Tweets() {
  return (
    <div className={styles.body}>
      <Accueil />
      <div className={styles.container}>
        <Tweet /><LastTweet/>
      </div>
      <Trends />
    </div>
  );
}

export default Tweets;
