import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleText1}>来发信</span>
              <br />
              为外贸企业提供全球营
              <br />
              销的一站式服务平台
            </h1>
            <p className={styles.heroSubtitle}>
              为业务出海提供高性价比选择，助力拓展全球市场
            </p>
            <div className={styles.buttonsContainer}>
              {/* 更换跳转链接 */}
              <Link
                className={styles.buttonPrimary}
                href="https://web.laifaxin.com/"
              >
                开始获客
              </Link>
              <Link
                className={styles.buttonGeneral}
                href="/zhinan/meet-laifaxin"
              >
                新手入门
              </Link>
              <Link
                className={styles.buttonGeneral}
                href="/zhinan/search-logic-section"
              >
                高手进阶
              </Link>
            </div>
          </div>
          <div className={styles.heroWrapper}>
            <div className={styles.blurryBackground}></div>
            <div className={styles.heroImageContainer}>
              <img
                className={styles.heroImage}
                src="https://cos.files.maozhishi.com/data/web/web-files/lfx-logo.png"
                alt="LFX Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="让外贸企业开发客户更简单高效！<head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
