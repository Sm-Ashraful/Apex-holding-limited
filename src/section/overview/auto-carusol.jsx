import Slider from "react-slick";
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay({ images }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        pauseOnHover: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, idx) => {
                    return <img src={image} key={idx} alt="about image" className="about-image" />
                })}
            </Slider>
        </div>
    );
}

export default AutoPlay;

AutoPlay.propTypes = {
    images: PropTypes.array
}
