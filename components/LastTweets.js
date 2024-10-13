import styles from "../styles/LastTweet.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { updateTweet } from "../reducers/tweetRex";
import {user} from "../reducers/user";
import SignUp from "./SignUp";
import SignIn from "./SignIn";


function LastTweet() {
  const [tweetData, setTweetData] = useState([]);
  const tweetRex = useSelector((state) => state.tweetRex.value);
  const userTokenLog = useSelector((state)=> state.user.value.token);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/get")
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.data);
      });
  }, [tweetRex]);

  const handleEraseClick=() =>{
    fetch(`http://localhost:3000/tweets/delete/${userTokenLog}`)
    .then((response) => response.json())
    .then(data => {
      setTweetData(data.data);
  })};


  const tweet = tweetData.map((data, i) => {
    if(userTokenLog === data.author.token){
      console.log(data);
      return (
        <div className={styles.containeur}>
          <div className={styles.user}>
            <Image
              className={styles.img}
              src="/oeuf.png"
              width={40}
              height={40}
            />
            <h3 className={styles.title}>{data.author?.firstname}</h3>
            <span>@{data.author?.username}</span>
            <span>{data.date}</span>
          </div>
          <div className={styles.content}>
            <p className={styles.msg}>{data.message}</p>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#ffffff", cursor: "pointer" }}
            />
            <span>  </span>
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color: "#ffffff", cursor: "pointer" }} 
              onClick={() => handleEraseClick()}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.containeur}>
          <div className={styles.user}>
            <Image
              className={styles.img}
              src="/oeuf.png"
              width={40}
              height={40}
            />
            <h3 className={styles.title}>{data.author?.firstname}</h3>
            <span>@{data.author?.username}</span>
            <span>{data.date}</span>
          </div>
          <div className={styles.content}>
            <p className={styles.msg}>{data.message}</p>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#ffffff", cursor: "pointer" }}
            />
            <span>  </span>
          </div>
        </div>
      );
    };
  });

  return <div className={styles.main}>{tweet}</div>;
}

export default LastTweet;
