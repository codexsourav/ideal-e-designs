import React, { useEffect } from 'react';

const NativeiOS = () => {
    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
    return (
        <div className="container pageview">
            <h1>Unlocking the Power of Native iOS Development</h1>

            <section className="advantage">
                <h2>Seamless Apple Ecosystem Integration</h2>
                <p>
                    Leverage the full potential of the Apple ecosystem by creating applications that seamlessly integrate with iOS devices, services, and features.
                </p>
            </section>

            <section className="advantage">
                <h2>Optimized Performance for iOS Devices</h2>
                <p>
                    Ensure optimal performance on iOS devices by developing native applications that take advantage of the platform's capabilities and hardware.
                </p>
            </section>

            <section className="advantage">
                <h2>Access to Latest iOS Features</h2>
                <p>
                    Stay at the forefront of iOS innovation by easily adopting the latest features, APIs, and design principles as they are introduced by Apple.
                </p>
            </section>

            <section className="advantage">
                <h2>Enhanced User Experience</h2>
                <p>
                    Provide users with a native and intuitive experience that aligns with iOS design guidelines, resulting in a polished and user-friendly application.
                </p>
            </section>

            <section className="advantage">
                <h2>App Store Exposure</h2>
                <p>
                    Benefit from the extensive reach of the Apple App Store, enhancing the visibility and accessibility of your application to a large and engaged user base.
                </p>
            </section>

            <section className="advantage">
                <h2>Security and Trust</h2>
                <p>
                    Ensure the security and trustworthiness of your application by adhering to Apple's stringent security standards, building confidence among users.
                </p>
            </section>
        </div>
    );
};

export default React.memo(NativeiOS);
