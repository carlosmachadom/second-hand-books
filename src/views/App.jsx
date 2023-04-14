import '@styles/main.css';
import '@styles/vars.css';
import Layout from '@views/authentication/Layout';
import SignUp from '@views/authentication/SignUp';


const App = () => {
    return (
        <Layout>
            <SignUp />
        </Layout>
    );
}

export default App;