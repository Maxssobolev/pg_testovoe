import { useSelector } from "react-redux";


export default function PageMain() {
    const user = useSelector(state => state.user)
    return (
        <div className="page page-main">
            {user.isLogged ? `Привет, ${user.userData?.firstName}` : `Привет, Гость`}
        </div>
    );
}


