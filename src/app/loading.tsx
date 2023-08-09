import styles from '@/styles/Loader.module.css';

export default function Loading() {
    return (
        <div className={styles.box}>
            <div className={`${styles.b} ${styles.b1}`}></div>
            <div className={`${styles.b} ${styles.b2}`}></div>
            <div className={`${styles.b} ${styles.b3}`}></div>
            <div className={`${styles.b} ${styles.b4}`}></div>
        </div>
    );
}
