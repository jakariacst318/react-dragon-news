import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex pt-6">
            <button className="btn btn-error text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={60}>
               <Link className="ms-10"> I can be a React component, multiple React components, or just some text...</Link>
               <Link className="ms-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ad aperiam? Soluta quam dolorem quia ex tenetur commodi itaque!...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;