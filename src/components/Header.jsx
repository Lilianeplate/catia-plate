import styles from './Header.module.css';

function Header() {

    function cadastrarUsuario () {
        console.log('Cadastrou!!!')
    }
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
                <button><i class="fa-solid fa-cart-shopping"></i> Carrinho </button>
                <button><i class="fa-solid fa-user"></i> Entre</button>
                <button onClick={cadastrarUsuario}><i class="fa-solid fa-pen-to-square"></i> Cadastre-se</button>

            </div>
        </div>
    );
}

export default Header;
