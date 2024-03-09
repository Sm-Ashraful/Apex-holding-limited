import { useEffect, useState } from "react";
import { sliders } from "../utils/slider-data";
import Skeleton from "./Skeleton";

export default function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = sliders.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);
    return (
        <Skeleton className={'w-full slider-container-custom'}>
            {sliders.map((slider, idx) => {
                let position = "nextSlide";
                if (idx === index) {
                    position = "activeSlide";
                }
                if (idx === index - 1 || (index === 0 && idx === sliders.length - 1)) {
                    position = "lastSlide";
                }
                return (
                    <article
                        key={index}
                        className={` ${position} slider-container-custom__main`}
                        style={{
                            backgroundImage: `url(${slider.photo})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div
                            className="full-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                        ></div>
                        <div
                            className="w-[605px] flex flex-col justify-center items-center text-center px-5 md:px-0"
                            style={{ zIndex: 1 }}
                        >
                            <h1 className="font-fuemen text-[#f1bf3f] text-[24px] lg:text-[38px]">
                                {slider.title}
                            </h1>


                            <div className="w-full md:hidden mt-10">

                            </div>
                        </div>
                    </article>
                );
            })}
            <div
                className="right-arrow rotate-45"
                onClick={() => setIndex(index + 1)}
            >
                <div className="-rotate-45">
                    <img
                        src={'/assets/right.png'}
                        alt=""
                        className=""
                    />
                </div>
            </div>

        </Skeleton>
    )
}
