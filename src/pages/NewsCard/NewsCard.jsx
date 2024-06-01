import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegBookmark , FaStar } from "react-icons/fa";
import { MdOutlineShare, MdRemoveRedEye } from "react-icons/md";


const NewsCard = ({ news }) => {
    const { title, details, thumbnail_url, _id, author, total_view ,rating} = news
    const { img, published_date, name } = author;
    const {number , badge} = rating
    return (
        <div>
            <div className='flex justify-between p-4 items-center mb-4'>
                <div className='flex gap-x-4 '>
                    <div><img className='w-10 rounded-full ' src={img} alt="" /></div>
                    <div>
                        <h2 className='font-semibold'>{name}</h2>
                        <p className='text-gray-500'>{published_date}</p>
                    </div>
                </div>
                <div className='flex gap-x-2 text-lg'>
                    <FaRegBookmark></FaRegBookmark>
                    <MdOutlineShare></MdOutlineShare>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl border border-slate-300 mb-10 p-5">
                <h2 className="card-title mb-5">{title}</h2>
                <img className='h-[450px]' src={thumbnail_url} alt="news" />
                <div className="card-body">


                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link className='text-red-400 font-bold' to={`/news/${_id}`}> Read More ...</Link></p>
                            :
                            <p>{details}</p>
                    }
                </div>
                <div className='flex justify-between items-center text-gray-500'>
                    <p className='flex items-center gap-x-2'> <span className='text-[#ff8c47] flex gap-x-2'><FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span> {number}</p>

                    <p className='flex items-center gap-x-2'><span className='text-xl'><MdRemoveRedEye ></MdRemoveRedEye></span>{total_view} </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

// NewsCard.propTypes = {
//     Children: PropTypes.node
// }
NewsCard.propTypes = {
    children: PropTypes.node
}