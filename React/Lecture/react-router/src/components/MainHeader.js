import {NavLink} from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        {/*Link 를 통한 새로고침 방지하기 , 리액트에 저장되어 있는 state 도 그대로 유지*/}
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''}
                                 to={'/welcome'}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => navData.isActive ? classes.active : ''}
                            to={'/products'}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;