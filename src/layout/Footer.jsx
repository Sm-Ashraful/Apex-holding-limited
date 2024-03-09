export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <picture className="footer__logo">
                    <source
                        srcSet="
              /assets/apex_logo.png 1x,
              /assets/apex_logo.png 2x
            "
                        media="{max-width: 37.5em}"
                    />
                    <img
                        srcSet="/assets/apex_logo.png 1x, /assets/apex_logo.png 2x"
                        alt="logo"
                    />
                </picture>
            </div>
            <div className="row">
                <div className="col-2-of-4">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Home</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Contact Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">About</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Our Business</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Sustainability</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">CSR</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <p className="footer__copyright">
                        <p className="u-margin-bottom-small "><span><svg className="u-margin-right-small" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" /><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg></span>
                            18 GULSHAN AVENUE, SHANTA SKYMARK, GULSHAN,DHAKA-1212, BANGLADESH.</p>
                        <p ><svg className="u-margin-right-small" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7z" /></svg>
                            SAT-THU 08:00AM ⇾ 04:30PM
                        </p>
                    </p>

                </div>
                <div className="col-1-of-4">
                    <p className="footer__copyright">
                        <p>
                            <span><svg className="u-margin-right-small" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinejoin="round" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" /><path strokeLinecap="round" d="m3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" /></g></svg></span>
                            <span>info@apexholdings.com</span>
                        </p>
                        <p>
                            <span><svg className="u-margin-right-small" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 18.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1zm0 0C9.159 17.023 6.824 14.045 5.5 11m0 0C4.4 8.472 4 5.898 4 4h4l1 4z" /></svg></span>
                            <span> +880 9606669988</span>
                        </p>
                    </p>
                </div>
            </div>
            <p className="u-center-text">
                Copyright © 2021 Apex Holdings Limited. All Rights Reserved
            </p>
        </footer>
    )
}
