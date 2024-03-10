export default function MobileNav() {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon"></span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <div className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link"> Home</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link"
                        >  About Us</a
                        >
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Our Business</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Sustainability</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">  CSR</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link"> Career</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
