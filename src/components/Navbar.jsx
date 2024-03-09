import Skeleton from "./Skeleton";

export default function Navbar() {
    return (
        <Skeleton className='bg-white higher-order '>
            <div className="nav opacity-top">
                <div>
                    <img src="/assets/apex_logo.png" alt="Apex logo" className="nav__logo" />
                </div>
                <ul className="nav__items ">
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Home
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link flex items-center gap-2" href={"/"}>
                            About Us
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link flex items-center gap-2" href={"/"}>
                            <span>Our Business</span>

                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Sustainability
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            CSR
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Career
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Contact
                        </a>
                    </li>
                    <div className="animation start-home"></div>
                </ul>
            </div>
        </Skeleton>
    )
}
