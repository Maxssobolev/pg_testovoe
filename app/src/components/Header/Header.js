import { Link } from "react-router-dom";
import Login from "../Login/Login";
//images
import { ReactComponent as LogoIcon } from '../../assets/img/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="header__item header__item_logo">
                <Link to='/'>
                    <LogoIcon />
                </Link>
            </div>
            <div className="header__item">
                <Link to='/news'>Новости</Link>
            </div>
            <div className="header__item">
                <Login />
            </div>
        </header>
    );
}


