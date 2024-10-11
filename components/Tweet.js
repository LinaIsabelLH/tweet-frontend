import styles from "../styles/Tweet.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateTweet} from '../reducers/tweetRex';


function Tweet() {
  
  const [tweetData, setTweetData] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  let token = user.token; 
  
  let handleClick = () => {
    fetch(`http://localhost:3000/tweets/post/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          message: tweetData,
          date: new Date(),
      }),
  })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        
        if(data.result){
          setTweetData('');
          dispatch(updateTweet());
      }}) };
  
  
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
