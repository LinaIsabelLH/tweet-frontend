import styles from "../styles/Trends.module.css";


let data = ['#hackatweet' , "#first"]

let tendance = data.map((e, i) => {
    return (
        <div className={styles.hashtag} key={i}>
            <span className={styles.sup}>{data[i]}</span>
            <span className={styles.sub}>{data.length} Tweets</span>
        </div>
    )
})

function Trends() {
  return (
    <div>
      <div className={styles.main}>
        <h2 className={styles.title}>Trends</h2>
            <div className={styles.container}>
                {tendance}
            </div>
      </div>
    </div>
  );
}

export default Trends;
