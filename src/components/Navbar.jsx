import Skeleton from "./Skeleton";

export default function Navbar() {
    return (
        <Skeleton className='bg-white'>
            <div className="nav">
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
                            Shop
                            <svg
                                className="hdt-menu-item-arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                            >
                                <path
                                    d="M10 1.24243L5 6.24243L-2.18557e-07 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link flex items-center gap-2" href={"/"}>
                            <span>Products</span>
                            <span>
                                <svg
                                    className="hdt-menu-item-arrow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="none"
                                >
                                    <path
                                        d="M10 1.24243L5 6.24243L-2.18557e-07 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Our Farm
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Blog
                        </a>
                    </li>
                    <li className="nav__items__item">
                        <a className="nav-link" href={"/"}>
                            Gallery
                        </a>
                    </li>
                </ul>
            </div>
        </Skeleton>
    )
}
