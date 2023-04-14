/* Importando estilos */
import '@styles/authentication/ChangePassword.css'

/* Importando elementos dependientes */
const Logo = require('@images/icons/brand/logo_yard_sale.svg')

const ChangePassword = () => {
    const yardSaleLogo = Logo;
    return (
        <section className="sign-up">
            <div className="form-container">
                <img src={yardSaleLogo} alt="logo" className="logo" />

                <h1 className="title">Create a new password</h1>
                <p className="sub-title">Enter a new password for your account</p>

                <form action="/" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" className="input input-pasword" placeholder="*********" />

                    <label htmlFor="confirm-password" className="label">Confirm password</label>
                    <input type="password" id="confirm-password" className="input input-pasword" placeholder="*********" />

                    <input type="submit" value="Confirm" className="login-button button-primary" />
                </form>
            </div>
        </section>
    );
}

export default ChangePassword;