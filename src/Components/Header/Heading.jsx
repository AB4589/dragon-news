import Header from './Header';
import NavBar from './NavBar';
import NewsBar from './NewsBar';

const Heading = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <NavBar />
            <NewsBar />
        </div>
    );
};

export default Heading;