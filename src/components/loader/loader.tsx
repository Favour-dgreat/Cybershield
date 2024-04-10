import { useState, useEffect } from 'react';
import styles from './Loader.module.css'; // Assuming you're using CSS modules for styling

const Loader = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // Adjust the delay time as needed

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.loader} ${loading ? styles.show : styles.hide}`}>
            <div className={styles.ball}></div>
            <div className={styles.ball2}></div>
            <div className={styles.ball3}></div>
        </div>
    );
};

export default Loader;
