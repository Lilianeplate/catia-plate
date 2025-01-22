import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <div>
            <img className={styles.HeaderLogo} src="/logo-transparente1.png" alt="logo" />
            </div>

            <div className={styles.HeaderNav}>
                <ul>
                    <li>
                        <a href="">Cama, mesa e banho</a>
                    </li>
                    <li>
                        <a href="">Cozinha</a>
                    </li>
                    <li>
                        <a href="">Tapetes</a>
                    </li>
                    <li>
                        <a href="">Vestuário</a>
                    </li>
                </ul>
            </div>

            <div className= {styles.HeaderButton}>
                <button>Entre</button>
                <button>Cadastre-se</button>
            </div>
        </div>
    );
}

export default Header;
