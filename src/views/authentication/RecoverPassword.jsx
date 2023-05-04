/* Importando estilos */
import '@styles/authentication/RecoverPassword.css';

/* Importando elementos dependientes */
const brandLogo = require('@images/icons/brand/logo_yard_sale.svg');
const emailIcon = require('@images/icons/general/email.svg');

const RecoverPassword = () => {
    return (
        <section className="sign-up">
            <div className="form-container">
                <img src={brandLogo} alt="logo" className="logo" />

                <h1 className="title">Email has been sent!</h1>
                <p className="sub-title">Please check you inbox for instructions on how to reset the password</p>

                <div className="image-container">
                    <img src={emailIcon} alt="" className="email-img" />
                </div>

                <button type="button" className="button-primary">Login</button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="#">Resend</a>
                </p>
            </div>
        </section>
    );
}

export default RecoverPassword;