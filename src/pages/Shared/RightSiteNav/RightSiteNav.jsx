import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../.../../../../assets/qZone1.png"
import qZone2 from "../.../../../../assets/qZone2.png"
import qZone3 from "../.../../../../assets/qZone3.png"

const RightSiteNav = () => {
    return (
        <div>
            {/* login */}

            <div className="p-4 space-y-3 mb-7">
                <h2 className="text-3xl font-semibold"> Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            {/* find us on */}
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-5"> Find Us On</h2>

                <div className="border border-stone-300 rounded-lg">
                    <a className="flex items-center p-4 font-medium text-lg " href="https://www.facebook.com/" target="blank"> <span className="text-blue-950 pr-3"><FaFacebookF /> </span> Facebook</a>

                    <a className="flex items-center p-4 font-medium text-lg " href="https://www.twitter.com/" target="blank"> <span className="text-blue-600 pr-3"><FaTwitter /> </span> Twitter </a>

                    <a className="flex items-center p-4 font-medium text-lg " href="https://www.instagram.com/" target="blank"> <span className="text-red-500 pr-3"><FaInstagram /> </span> Instagram </a>
                </div>
            </div>

            {/* q-zone */}
            <div className="p-4 ">
            <h2 className="text-2xl font-semibold mb-5"> Q-Zone</h2>
                <img className="mt-3" src={qZone1} alt="q-zone" />
                <img className="mt-3" src={qZone2} alt="q-zone" />
                <img className="mt-3" src={qZone3} alt="q-zone" />
            </div>
        </div>
    );
};

export default RightSiteNav;