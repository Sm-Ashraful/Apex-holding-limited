import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <MobileNav />
            {children}
            <Footer />
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}