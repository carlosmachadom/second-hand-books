import '@styles/main.css';
import '@styles/vars.css';

/* Importando Utilidades del router de React en su verisón 6 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@views/containers/Layout';
import Home from '@views/pages/Home';
import NotFound from '@views/pages/404';
import Register from '@views/authentication/Register';
import Login from '@views/authentication/Login';
import RecoverPassword from '@views/authentication/RecoverPassword';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/recover-password" element={<RecoverPassword />} />
                </Route>

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
