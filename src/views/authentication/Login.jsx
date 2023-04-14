/* Importando estilos */
import '@styles/authentication/Login.css';

/* Importando elementos dependientes */
const Logo = require('@images/icons/brand/logo_yard_sale.svg')

const Login = () => {
    const yardSaleLogo = Logo;
    return (
        <section className="sign-up">
            <div className="form-container">
                <img src={yardSaleLogo} alt="logo" className="logo" />

                <form action="/" className="form">
                    <label htmlFor="email-address" className="label">Email address</label>
                    <input type="email" id="email-address" className="input input-email" placeholder="mcdario@gmail.com" />

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="confirm-password" className="input input-pasword" placeholder="*********" />

                    <input type="submit" value="Confirm" className="login-button button-primary" />

                    <a href="#">Forgot my password</a>
                </form>

                <button type="button" className="button-secondary">Sign Up</button>
            </div>
        </section>
    );
}

export default Login;