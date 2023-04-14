import '@styles/main.css';
import Layout from './authentication/Layout';
import Login from "./authentication/Login";

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;