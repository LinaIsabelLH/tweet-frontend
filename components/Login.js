import styles from '../styles/Login.module.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-solid-svg-icons';


function Login () {




    return (
        <div className={styles.main}>
            <FontAwesomeIcon styles={{color : 'white'}} icon={faTwitter} rotation={180} />
        </div>
    )
}


export default Login