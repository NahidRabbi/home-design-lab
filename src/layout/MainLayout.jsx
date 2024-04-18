import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";



const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <div>
                 <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

          
        </div>
    );
};

export default MainLayout;