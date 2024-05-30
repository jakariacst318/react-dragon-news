import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto pt-12 pb-2" src={logo} alt="" />
            <p className="text-lg py-3">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;