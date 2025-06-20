import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import GoogleMapsHomepageFeatures from "../components/GoogleMapsHomepageFeatures";

function GoogleMapsHomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleText1}>谷歌地图数据采集</span>
              <br />
              <h2 style={{ fontSize: "3rem" }}>
                从Google Maps获取客户线索的商家抓取工具
              </h2>
            </h1>
            <p className={styles.heroSubtitle}>
              批量获取名称、类别、电话、网站、邮箱、社媒等信息
            </p>
            <div className={styles.buttonsContainer}>
              {/* 更换跳转链接 */}
              <Link className={styles.buttonPrimary} href="../chajian/how-to-use-google-maps-plugin">
                使用说明
              </Link>
              <Link className={styles.buttonGeneral} href="../chajian/how-to-install-google-maps-plugin">
                下载安装
              </Link>
              <Link className={styles.buttonGeneral} href="../chajian/google-maps-plugin-faq">
                常见问题
              </Link>
            </div>
          </div>
          <div className={styles.heroWrapper}>
            <div className={styles.blurryBackground}></div>
            <div className={styles.heroImageContainer}>
              <img
                className={styles.heroImage}
                src="/img/lfx-logo.png"
                alt="LFX Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function PluginsHome(): ReactNode {
  return (
    <Layout
    title={`谷歌地图数据采集专业版`}
    description=" 欢迎使用谷歌地图数据采集专业版。本页面将引导您快速上手，了解核心功能，并开始您的第一次商家信息采集任务，助力外贸业务拓展。<head />"
  >
      <GoogleMapsHomepageHeader />
      <main>
        <GoogleMapsHomepageFeatures />
      </main>
    </Layout>
  );
}

