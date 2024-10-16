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
  const[isLiked, setIsLiked] = useState(0);
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

  let iconHeartStyle;
  const handleLike = (message)=>{
    const tweetLiked = tweetData.filter(e => e.message === message);
    if(tweetLiked){
    fetch(`http://localhost:3000/tweets/liked/${tweetLiked}`)
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      if(data){
        setIsLiked(isLiked+1);
        iconHeartStyle={'color':'red'}
      }
  })}} 


  const tweet = tweetData.map((data, i) => {
    if(userTokenLog === data.author.token){
      console.log(data);
      return (
        <div className={styles.containeur} key={i}>
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
              style={{ color: "#ffffff", cursor: "pointer"}}
              onClick={()=>handleLike(data.message)}
            />
            <span> {isLiked} </span>
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
        <div className={styles.containeur} key={i}>
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
              style={{ color: "#ffffff", cursor: "pointer"}}
              onClick={()=>handleLike(data.message)}
            />
            <span> {isLiked} </span>
          </div>
        </div>
      );
    };
  });

  return <div className={styles.main}>{tweet}</div>;
}

export default LastTweet;
