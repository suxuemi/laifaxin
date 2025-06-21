import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
// import "./styles.css";

import GoogleMapsDetails from "@site/src/pages/_google-maps-details.mdx";

const FeatureList = [
  {
    title: "零基础",
    icon: "🟢",
    description: (
      <>无技术基础的业务人员，需单点几下即可抓取地图商家，简单易上手。</>
    ),
  },
  {
    title: "全自动",
    icon: "🤖",
    description: (
      <>自动打开地图并抓取，无需人工，24小时全自动运行，省时省力。</>
    ),
  },
  {
    title: "高效率",
    icon: "⚡",
    description: (
      <>60分钟抓取7000商家，抓取速度远超同类产品，数据获取更加高效。</>
    ),
  },
  {
    title: "不绑定",
    icon: "🌐",
    description: (
      <>无需绑定设备，支持在任何Chrome内核浏览器上运行，随时随地使用。</>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className={styles.customFeatureBox}>
        <div className={clsx("text--left", styles.customFeatureIcon)}>
          <div className={styles.featureIcon}>{icon}</div>
        </div>
        <div className="text--left">
          <Heading as="h4">{title}</Heading>
          <p className={styles.featureText}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function GoogleMapsHomepageFeatures() {
  return (
    <div className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr style={{ margin: "40px 0" }} />
        <section>
          <GoogleMapsDetails />
        </section>
      </div>
    </div>
  );
}
