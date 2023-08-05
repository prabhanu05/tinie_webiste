import Logo from '@/assets/svg/Logo';
import styles from '@/styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
};

export default Header;
