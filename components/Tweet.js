import styles from "../styles/Tweet.module.css";




function Tweet() {
  return (
    <div className={styles.main}>
      <h2>Home</h2>
      <div className={styles.input}><input className={styles.wazza} maxLength={280} placeholder="What's up?" ></input></div>
      <div className={styles.button}><span>0/280</span><button>Tweet</button></div>
    </div>
  );
}

export default Tweet;
