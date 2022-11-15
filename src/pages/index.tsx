import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { hotjar } from "react-hotjar";

import styles from "./index.module.css";

const hotjarId = 3248897; // This is publicly accessible and is not sensitive

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  React.useEffect(() => {
    hotjar.initialize(hotjarId, 6);
  }, []);

  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner, "custom-hero")}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get Started In Just 5 Minutes ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Just In Time Webhooks">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
