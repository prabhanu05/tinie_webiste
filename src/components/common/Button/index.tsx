import styles from '@/styles/Button.module.css';

const Button = (props: {
    text: string;
    onClick: () => void;
    variant: 'primary' | 'secondary';
}) => {
    return (
        <button
            className={
                props.variant === 'primary'
                    ? `${styles.button} ${styles.primary}`
                    : `${styles.button} ${styles.secondary}`
            }
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;
