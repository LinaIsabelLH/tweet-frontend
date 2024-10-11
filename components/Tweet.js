import styles from "../styles/Tweet.module.css";
import { useState } from "react";


function Tweet() {
  
  const [tweetData, setTweetData] = useState('');
  
  
  let handleClick = () => {
    fetch("http://localhost:3000/tweets/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          firstname: "Joachim",
          username: "Jasmin",
          message: tweetData,
          date: new Date(),
      }),
  })
      .then((response) => response.json())
      }
  ;
  
  const length = tweetData.length
  
  return (
    <div className={styles.main}>
      <h2>Home</h2>
      <div className={styles.input}>
        <textarea
          className={styles.wazza}
          maxLength={280}
          placeholder="What's up?"
          onChange={(e) => setTweetData(e.target.value)}
          value={tweetData}
        ></textarea>
      </div>
      <div className={styles.button}>
        <span>{length}/280</span>
        <button onClick={() => handleClick()}>Tweet</button>
      </div>
    </div>
  );
}

export default Tweet;
