const UpdateUserData = () => {
    return (
        <section className="sign-up">
            <div className="form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
                    <label htmlFor="name" className="label">Name</label>
                    <p className="value">Carlos Machado</p>

                    <label htmlFor="email" className="label">Email address</label>
                    <p className="value">mcdario@gmail.com</p>

                    <label htmlFor="password" className="label">Password</label>
                    <p className="value">*********</p>

                    <input type="submit" value="Edit" className="login-button button-secondary" />
                </form>
            </div>
        </section>
    );
}

export default UpdateUserData;