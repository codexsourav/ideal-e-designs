import { useEffect } from "react";

const AdvantagesOfWooCommerce = () => {
    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

    return (
        <div className="container pageview">
            <h1>Elevating Online Stores with WooCommerce Development</h1>

            <section className="advantage">
                <h2>Seamless WordPress Integration</h2>
                <p>
                    Leverage the power of WooCommerce seamlessly integrated into WordPress, creating a user-friendly and familiar environment for managing your online store.
                </p>
            </section>

            <section className="advantage">
                <h2>Easy Store Setup and Management</h2>
                <p>
                    Set up and manage your online store effortlessly with WooCommerce's intuitive interface, allowing for quick product additions, inventory management, and order processing.
                </p>
            </section>

            <section className="advantage">
                <h2>Extensive Customization Options</h2>
                <p>
                    Tailor your online store to match your brand identity with a wide range of customization options, themes, and extensions available within the WooCommerce ecosystem.
                </p>
            </section>

            <section className="advantage">
                <h2>Secure and Reliable</h2>
                <p>
                    Ensure the security of your online transactions with WooCommerce's commitment to providing a secure and reliable platform for your e-commerce business.
                </p>
            </section>

            <section className="advantage">
                <h2>Scalability for Growing Businesses</h2>
                <p>
                    Scale your online business effortlessly with WooCommerce, adapting to the growing demands of your store and accommodating increased product listings and customer traffic.
                </p>
            </section>

            <section className="advantage">
                <h2>Integrated Payment Gateways</h2>
                <p>
                    Facilitate seamless transactions with a variety of integrated payment gateways, ensuring convenience for your customers and supporting various payment methods.
                </p>
            </section>
        </div>
    );
};

export default AdvantagesOfWooCommerce;
