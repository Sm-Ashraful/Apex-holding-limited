import Skeleton from "../../components/Skeleton";

export default function KeyStrength() {
    return (
        <Skeleton className="about-container">
            <h1>KEY STRENGTHS</h1>
            <div className="strength-container">
                <div className="strength">
                    <span className="big-icon ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0" /></svg>
                    </span>
                    <h1>22,000+</h1>
                    <p>TOTAL EMPLOYEE</p>
                </div>
                <div className="strength">
                    <span className="big-icon ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a5 5 0 0 0-1.001 9.9v3.099H9.733A2.733 2.733 0 0 0 7 17.732V20.1A5.002 5.002 0 0 0 8 30a5 5 0 0 0 1-9.9v-2.368c0-.405.329-.733.733-.733h12.534c.405 0 .733.328.733.733V20.1a5.002 5.002 0 0 0 1 9.9a5 5 0 0 0 1-9.9v-2.368a2.733 2.733 0 0 0-2.733-2.733H17V11.9A5.002 5.002 0 0 0 16 2m-3 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0M5 25a3 3 0 1 1 6 0a3 3 0 0 1-6 0m19-3a3 3 0 1 1 0 6a3 3 0 0 1 0-6" /></svg>
                    </span>
                    <h1>15+</h1>
                    <p>TOTAL BUSINESS CONCERNS</p>
                </div>
                <div className="strength">
                    <span className="big-icon ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m19 16l2-4l-4-.889M12 10v5m0-5l-5 1.111M12 10l5 1.111M5 16l-2-4l4-.889m0 0L6 6h4m7 5.111L18 6h-4m0 0V3h-4v3m4 0h-4M3 20l1.245-.498a2.57 2.57 0 0 1 2.38.248v0a2.57 2.57 0 0 0 3.36-.446l.035-.04a2.631 2.631 0 0 1 3.96 0l.036.04a2.57 2.57 0 0 0 3.36.446v0a2.57 2.57 0 0 1 2.38-.248L21 20" /></svg>
                    </span>
                    <h1>6+</h1>
                    <p>EXPORT ORIENTED COMPANIES</p>
                </div>
                <div className="strength">
                    <span className="big-icon ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72l212-211.999V280h32V160z" /><path fill="currentColor" d="M48 104H16v392h480v-32H48z" /></svg>
                    </span>
                    <h1>2</h1>
                    <p>PUBLIC LISTED COMPANIES</p>
                </div>

            </div>
        </Skeleton>
    )
}
