import '@styles/pages/Home.css';

const addToCartIcon = require('@images/icons/general/bt_add_to_cart.svg');


const Home = () => {
    return (
        <>
            <section className="products-container">
                <div className="card">
                    <figure className="header-card">
                        <img src="https://images.pexels.com/photos/9878654/pexels-photo-9878654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="reloj" className="product-image" />
                    </figure>

                    <section className="body-card">
                        <div className="text-container">
                            <h3>$120,00</h3>
                            <p>Watch</p>
                        </div>

                        <figure className="card-icon-container">
                            <img className="card-icon" src={addToCartIcon} />
                        </figure>
                    </section>
                </div>

                <div className="card">
                    <figure className="header-card">
                        <img src="https://images.pexels.com/photos/9878654/pexels-photo-9878654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="bike" className="product-image" />
                    </figure>

                    <section className="body-card">
                        <div className="text-container">
                            <h3>$120,00</h3>
                            <p>Bike</p>
                        </div>

                        <figure className="card-icon-container">
                            <img className="card-icon" src={addToCartIcon} />
                        </figure>
                    </section>
                </div>

                <div className="card">
                    <figure className="header-card">
                        <img src="https://images.pexels.com/photos/9878654/pexels-photo-9878654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Shoes" className="product-image" />
                    </figure>

                    <section className="body-card">
                        <div className="text-container">
                            <h3>$120,00</h3>
                            <p>Shoes</p>
                        </div>

                        <figure className="card-icon-container">
                            <img className="card-icon" src={addToCartIcon} />
                        </figure>
                    </section>
                </div>

                <div className="card">
                    <figure className="header-card">
                        <img src="https://images.pexels.com/photos/9878654/pexels-photo-9878654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Camera" className="product-image" />
                    </figure>

                    <section className="body-card">
                        <div className="text-container">
                            <h3>$120,00</h3>
                            <p>Camera</p>
                        </div>

                        <figure className="card-icon-container">
                            <img className="card-icon" src={addToCartIcon} />
                        </figure>
                    </section>
                </div>

                <div className="card">
                    <figure className="header-card">
                        <img src="https://images.pexels.com/photos/9878654/pexels-photo-9878654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="iPhone" className="product-image" />
                    </figure>

                    <section className="body-card">
                        <div className="text-container">
                            <h3>$120,00</h3>
                            <p>iPhone</p>
                        </div>

                        <figure className="card-icon-container">
                            <img className="card-icon" src={addToCartIcon} />
                        </figure>
                    </section>
                </div>

                <div className="card">
                    <figure className="header-card">
                        <img src="https://images.pexels.com/photos/9878654/pexels-photo-9878654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Old TV" className="product-image" />
                    </figure>

                    <section className="body-card">
                        <div className="text-container">
                            <h3>$120,00</h3>
                            <p>Old TV</p>
                        </div>

                        <figure className="card-icon-container">
                            <img className="card-icon" src={addToCartIcon} />
                        </figure>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Home;