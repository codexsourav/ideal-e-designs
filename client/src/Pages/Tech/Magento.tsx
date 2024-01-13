import { useEffect } from "react";

const AdvantagesOfMagento = () => {
    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

    return (
        <div className="container pageview">
            <h1>Elevating E-commerce with Magento Development</h1>

            <section className="advantage">
                <h2>Robust E-commerce Platform</h2>
                <p>
                    Harness the power of Magento as a robust and feature-rich e-commerce platform, providing a solid foundation for your online store.
                </p>
            </section>

            <section className="advantage">
                <h2>Scalability and Flexibility</h2>
                <p>
                    Scale your online business effortlessly with Magento's scalable architecture and flexible customization options to meet your unique business needs.
                </p>
            </section>

            <section className="advantage">
                <h2>Extensive Extension Marketplace</h2>
                <p>
                    Explore a vast marketplace of extensions and modules to enhance the functionality of your Magento store, ensuring endless possibilities for customization.
                </p>
            </section>

            <section className="advantage">
                <h2>Mobile-Responsive Design</h2>
                <p>
                    Provide a seamless shopping experience across devices with Magento's mobile-responsive design, catering to the growing mobile user base.
                </p>
            </section>

            <section className="advantage">
                <h2>SEO-Friendly Architecture</h2>
                <p>
                    Boost your online visibility with Magento's SEO-friendly architecture, helping your store rank higher in search engine results and attract more visitors.
                </p>
            </section>

            <section className="advantage">
                <h2>Community and Enterprise Editions</h2>
                <p>
                    Choose the edition that suits your business requirements, whether it's the feature-rich Magento Enterprise or the open-source Magento Community edition.
                </p>
            </section>
        </div>
    );
};

export default AdvantagesOfMagento;
