import Skeleton from "../../components/Skeleton";

export default function Segments() {
    return (
        <Skeleton className='about-container w-full bg-white'>
            <h1>OUR BUSINESS SEGMENTS</h1>
            <div className="segment-container">
                <div className="card-container">
                    <img src="/assets/food.png" alt="food icon" className="cover-image" />
                    <p className="sub-header">Our Food Division</p>
                </div>
                <div className="card-container">
                    <img src="/assets/texttile.webp" alt="food icon" className="cover-image" />
                    <p className="sub-header">Our Food Division</p></div>
                <div className="card-container">
                    <img src="/assets/aguro.png" alt="food icon" className="cover-image" />
                    <p className="sub-header">Our Agro Division</p></div>
                <div className="card-container">
                    <img src="/assets/diver.webp" alt="food icon" className="cover-image" />
                    <p className="sub-header">Our Diversified Division</p></div>
            </div>
        </Skeleton>
    )
}
