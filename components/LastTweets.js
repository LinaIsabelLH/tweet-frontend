import styles from "../styles/LastTweet.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function LastTweet() {
  const [tweetData, setTweetData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/get")
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.data);
      });
  }, []);

  console.log(tweetData);

  const tweet = tweetData.map((data, i) => {
    return (
      <div className={styles.containeur}>
        <div className={styles.user}>
          <Image
            className={styles.img}
            src="/oeuf.png"
            width={40}
            height={40}
          />
          <h3 className={styles.title}>{data.firstName}</h3>
          <span>@{data.username}</span>
          <span>{data.date}</span>
        </div>
        <div className={styles.content}>
          <p className={styles.msg}>{data.message}</p>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ffffff", cursor: "pointer" }}
          />
          <span></span>
        </div>
      </div>
    );
  });

  return <div className={styles.main}>{tweet}</div>;
}

export default LastTweet;
