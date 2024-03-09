import AutoPlay from "./auto-carusol"

export default function AboutUs() {
    const aboutImages = [
        "https://apexholdings.com/img/about/srimp-002.jpg", "https://apexholdings.com/img/about/textile_line_big.jpg",
        "https://apexholdings.com/img/about/abbl_002_big.jpg", "https://apexholdings.com/img/about/agriscience_001_big.jpg", "https://apexholdings.com/img/about/yarn_001_big.jpg", "https://apexholdings.com/img/about/chemical_big.jpg"
    ]
    return (

        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    About Us
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Who Are We?
                    </h3>
                    <p className="paragraph">
                        Apex Holdings Limited (AHL) is a holding company for the management of a wide range of manufacturing and export-oriented enterprises, ranging from Frozen & Convenience Foods, Textiles & Apparels, Chemicals & Agro businesses. The company was formed and registered in Bangladesh in 1998. The sponsors of AHL had set up its first export-oriented manufacturing enterprise in 1980 and have ever since grown into a sizable group of companies. As the number of companies under the management increased, the need for a management company to facilitate coordination and to maintain control over the individual company became necessary.
                    </p>


                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img
                            src="/assets/about/about1.jpg"
                            alt="Photo 1"
                            className="composition__photo composition__photo--p1"
                        /><img
                            src="/assets/about/aabout2.jpg"
                            alt="Photo 2"
                            className="composition__photo composition__photo--p2"
                        /><img
                            src="/assets/about/about3.jpg"
                            alt="Photo 3"
                            className="composition__photo composition__photo--p3"
                        />
                    </div>
                </div>
            </div>
            <div >
                <AutoPlay images={aboutImages} />
            </div>

        </section>

    )
}
