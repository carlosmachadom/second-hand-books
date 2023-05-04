
import '@styles/components/Header.css';
const Logo = require('@images/icons/brand/logo_yard_sale.svg');
const menuIcon = require('@images/icons/general/icon_menu.svg');
const cartIcon = require('@images/icons/general/icon_shopping_cart.svg');

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="nav-bar">
                    <section className="left-section">
                        <img className="menu-icon" src={menuIcon} alt="" />

                        <figure className="logo-container">
                            <img src={Logo} alt="Company logo" />
                        </figure>

                        <ul className="menu">
                            <li className="menu-item"><a href="">All</a></li>
                            <li className="menu-item"><a href="">Clothes</a></li>
                            <li className="menu-item"><a href="">Electronics</a></li>
                            <li className="menu-item"><a href="">Furniture</a></li>
                            <li className="menu-item"><a href="">Toys</a></li>
                            <li className="menu-item"><a href="">Others</a></li>
                        </ul>
                    </section>

                    <section className="right-section">
                        <li className="second-menu-container">
                            <p>mcdario0223@gmail.com</p>
                            <span></span>
                        </li>

                        <li className="shopping-cart-container">
                            <img src={cartIcon} alt="" />
                            <div>2</div>
                        </li>
                    </section>
                </nav>
            </header>
        </>
    );
}

export default Header;