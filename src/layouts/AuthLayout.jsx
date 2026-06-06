import { Outlet } from "react-router";
import NavBar from "../Components/Header/NavBar";

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <header className="w-11/12 mx-auto py-4">
                <NavBar />
            </header>
            <main className="w-11/12 mx-auto py-5">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;