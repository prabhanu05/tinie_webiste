import styles from '@/styles/Header.module.css';

const HeaderButton = (props: { text: string; onClick: () => void }) => {
    return (
        <button onClick={props.onClick} className={styles.header_btn}>
            {props.text}
        </button>
    );
};

export default HeaderButton;
