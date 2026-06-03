import { Outlet } from 'react-router';
import Heading from '../Components/Header/Heading';
import Adverstise from '../Components/NewsBody/Adverstise';
import SideBar from '../Components/NewsBody/SideBar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Heading></Heading>
            </header>
            <main className="flex gap-4 mx-auto mt-4 grid grid-cols-12 w-10/12">
                <SideBar/>
                <div className="col-span-6">
                <Outlet></Outlet>
                </div>
                <Adverstise/>
            </main>
        </div>
    );
};

export default HomeLayout;