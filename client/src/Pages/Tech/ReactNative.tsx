import React, { useEffect } from 'react';

const ReactNative = () => {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
  return (
    <div className="container pageview">
      <h1>Why you Choose React Native</h1>

      <section className="advantage">
        <h2>Cross-Platform Brilliance</h2>
        <p>
          Reach both iOS and Android users with a single codebase, ensuring consistent and high-quality experiences for your app.
        </p>
      </section>

      <section className="advantage">
        <h2>Beautifully Reusable Components</h2>
        <p>
          Leverage the flexibility of reusable components, saving development time and ensuring a cohesive design across your application.
        </p>
      </section>

      <section className="advantage">
        <h2>Instant Updates with Hot Reloading</h2>
        <p>
          Witness real-time changes without disruption, allowing for rapid development and immediate feedback on your app's look and feel.
        </p>
      </section>

      <section className="advantage">
        <h2>Seamless Native Performance</h2>
        <p>
          Enjoy the best of both worlds - native performance combined with the efficiency of web development, ensuring a smooth user experience.
        </p>
      </section>

      <section className="advantage">
        <h2>Community Support at Your Fingertips</h2>
        <p>
          Join a thriving community that ensures your app stays up-to-date, backed by regular updates and a plethora of resources for success.
        </p>
      </section>

      <section className="advantage">
        <h2>Cost-Effective Excellence</h2>
        <p>
          Streamline development costs by building cross-platform apps, allowing you to maximize efficiency without compromising on quality.
        </p>
      </section>
    </div>
  );
};

export default React.memo(ReactNative);
