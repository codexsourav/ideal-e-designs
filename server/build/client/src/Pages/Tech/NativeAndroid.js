import React, { useEffect } from 'react';
const NativeAndroid = () => {
    useEffect(() => { var _a; return (_a = window.document.scrollingElement) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0); }, []);
    return (<div className="container pageview">
            <h1>Unveiling the Advantages of Native Android Development</h1>

            <section className="advantage">
                <h2>Tailored User Experience</h2>
                <p>
                    Craft a unique and platform-specific user experience by utilizing the native Android design principles and guidelines.
                </p>
            </section>

            <section className="advantage">
                <h2>Optimized Performance</h2>
                <p>
                    Harness the full potential of Android devices with optimized performance, as your app directly interacts with the underlying hardware.
                </p>
            </section>

            <section className="advantage">
                <h2>Seamless Integration with Android Features</h2>
                <p>
                    Leverage native Android APIs and features seamlessly, providing users with a more integrated and feature-rich experience.
                </p>
            </section>

            <section className="advantage">
                <h2>Access to the Latest Android Technologies</h2>
                <p>
                    Stay at the forefront of Android innovation by easily adopting the latest technologies, APIs, and system updates as they are released.
                </p>
            </section>

            <section className="advantage">
                <h2>Robust and Secure Applications</h2>
                <p>
                    Ensure the security and stability of your application with the inherent security features of native Android development.
                </p>
            </section>

            <section className="advantage">
                <h2>Customization and Branding</h2>
                <p>
                    Have complete control over the look and feel of your application, allowing for deep customization and branding to align with your business identity.
                </p>
            </section>
        </div>);
};
export default React.memo(NativeAndroid);
