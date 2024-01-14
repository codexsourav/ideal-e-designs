import React, { useEffect } from 'react';
const AdvantagesOfFlutter = () => {
    useEffect(() => { var _a; return (_a = window.document.scrollingElement) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0); }, []);
    return (<div className="container pageview">
            <h1>Exploring the Benefits of Flutter</h1>

            <section className="advantage">
                <h2>Beautiful and Consistent UI</h2>
                <p>
                    Create visually stunning and consistent user interfaces using Flutter's extensive library of customizable widgets.
                </p>
            </section>

            <section className="advantage">
                <h2>Single Codebase, Multiple Platforms</h2>
                <p>
                    Build applications for both iOS and Android with a single codebase, ensuring a unified experience across different devices.
                </p>
            </section>

            <section className="advantage">
                <h2>Fast Development with Hot Reload</h2>
                <p>
                    Experience rapid development cycles with Flutter's hot reload feature, allowing instant visualization of code changes without app restarts.
                </p>
            </section>

            <section className="advantage">
                <h2>Native Performance</h2>
                <p>
                    Enjoy high-performance mobile applications with Flutter, as it compiles to native ARM code for both iOS and Android platforms.
                </p>
            </section>

            <section className="advantage">
                <h2>Growing Community Support</h2>
                <p>
                    Join a thriving community of developers, ensuring continuous updates, support, and a wealth of resources for a successful Flutter journey.
                </p>
            </section>

            <section className="advantage">
                <h2>Cost-Effective Development</h2>
                <p>
                    Save development costs by maintaining a single codebase for multiple platforms, reducing the time and effort required for cross-platform app development.
                </p>
            </section>
        </div>);
};
export default React.memo(AdvantagesOfFlutter);
