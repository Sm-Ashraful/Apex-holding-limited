import Skeleton from "../../components/Skeleton"
import AutoPlay from "./auto-carusol"

export default function AboutUs() {
    const aboutImages = [
        "https://apexholdings.com/img/about/srimp-002.jpg", "https://apexholdings.com/img/about/textile_line_big.jpg",
        "https://apexholdings.com/img/about/abbl_002_big.jpg", "https://apexholdings.com/img/about/agriscience_001_big.jpg", "https://apexholdings.com/img/about/yarn_001_big.jpg", "https://apexholdings.com/img/about/chemical_big.jpg"
    ]
    return (
        <Skeleton className="about-container">
            <h1>About Us</h1>
            <p>Apex Holdings Limited (AHL) is a holding company for the management of a wide range of manufacturing and export-oriented enterprises, ranging from Frozen & Convenience Foods, Textiles & Apparels, Chemicals & Agro businesses. The company was formed and registered in Bangladesh in 1998. The sponsors of AHL had set up its first export-oriented manufacturing enterprise in 1980 and have ever since grown into a sizable group of companies. As the number of companies under the management increased, the need for a management company to facilitate coordination and to maintain control over the individual company became necessary.</p>
            <div className="w-full">
                <AutoPlay images={aboutImages} />
            </div>
        </Skeleton>
    )
}
