import Banner from "./Banner";
import Navigation from "./Navigation";

const Header: React.FC = () => {
    return (
        <header className="">
            <Banner />
            <Navigation />
        </header>
    );
}

export default Header;