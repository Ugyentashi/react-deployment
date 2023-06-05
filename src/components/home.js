import {useLocation} from "react-router-dom";
export default function Home() {
    const location = useLocation();
    console.log(location);

    const isHomePage = location.pathname === "/";
    console.log(isHomePage);
    return (
        <div>
            <p>Hello world</p>
        </div>
    );
}