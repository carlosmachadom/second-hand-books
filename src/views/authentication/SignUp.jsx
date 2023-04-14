/* Importando estilos */
import '@styles/authentication/SignUp.css';

const SignUp = () => {
    return (
        <section className="sign-up">
            <div className="form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name" className="input input-name" placeholder="Carlos Machado" />

                    <label htmlFor="email" className="label">Email address</label>
                    <input type="email" id="email" className="input input-email" placeholder="mcdario@gmail.com" />

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" className="input input-pasword" placeholder="*********" />

                    <input type="submit" value="Create" className="login-button button-primary" />
                </form>
            </div>
        </section>
    );
}

export default SignUp;