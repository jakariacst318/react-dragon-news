import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSiteNav from "../Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSiteNav></LeftSiteNav>
                </div>

                {/* news card container */}
                <div className="md:col-span-2 ">
                    <h2 className="text-2xl font-semibold pb-4">Dragon News</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id}
                            news={aNews}></NewsCard>)
                    }
                </div>


                <div className="">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;