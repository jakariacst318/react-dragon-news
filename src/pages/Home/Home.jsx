import Header from "../Shared/Header/Header";
import LeftSiteNav from "../Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-red-500">
                    <LeftSiteNav></LeftSiteNav>
                </div>


                <div className="md:col-span-2 border border-green-500">
                    <h2 className="text-2xl">news comeing soone.... </h2>
                </div>


                <div className="border border-red-500">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;