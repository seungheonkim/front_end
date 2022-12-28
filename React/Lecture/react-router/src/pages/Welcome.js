import {Link, Outlet} from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Link to={'new-user'}>New User</Link>
            {/*nested content 가 어디에 들어가야하는지 표시해주는 outlet*/}
            <Outlet/>
        </section>
    )
}

export default Welcome;