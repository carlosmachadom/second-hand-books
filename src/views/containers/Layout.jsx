import { Outlet } from "react-router-dom";
import Header from '@views/components/Header';

const Layout = () => {
    return (
        <>
            <Header />


            <Outlet />
        </>
    )
}

export default Layout;