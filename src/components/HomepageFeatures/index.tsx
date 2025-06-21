import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import "./styles.css";

const FeatureList = [
  {
    title: "全球客户搜索",
    Svg: require("@site/static/svg/search.svg").default,
    description: (
      <>
        Google、LinkedIn、Facebook、Twitter、WhatsApp、Zoominfo等一键获取姓名、职位、社媒、官网等
      </>
    ),
  },
  {
    title: "邮箱批量验证",
    Svg: require("@site/static/svg/verification.svg").default,
    description: (
      <>
        免费：邮箱验证服务完全免费 批量：单日可验证上百万邮箱
        准确：全球邮箱验证准确率99%+
      </>
    ),
  },
  {
    title: "海量邮件营销",
    Svg: require("@site/static/svg/market.svg").default,
    description: (
      <>
        支持邮件追踪，随时客户最新动态 支持数据统计，一图了解发送效果
        低成本，个性化，免费试用，上手快
      </>
    ),
  },
  {
    title: "邮件实时追踪",
    Svg: require("@site/static/svg/trace.svg").default,
    description: (
      <>
        实时了解客户阅读、点击、下载状态 及时跟进客户情况，客户开发更高效
        自动统计追踪数据，追踪效果更直观
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className={clsx("text--center", styles.customFeatureSvg)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <section className={clsx("section ud-features", styles.section)}>
          <div className="left-content">
            <span className="features-btn">特色功能</span>
            <h1 className="features-title">全球搜索，精准获客</h1>
            <p>
              依托AI聚合大数据，全球超过5亿联系方式和超过5000万家公司信息，实时拉取全网数据，保证数据的精准及可靠。提供LinkedIn、Facebook、WhatsApp、twitter、zoominfo入口链接，背调更便捷。
            </p>
            <p>
              终身免费，支持个性化筛选国家、行业、企业规模，搜索各大平台的用户、企业，可根据您的需求进行量身定制，助您快速拓展全球业务。一键获取客户的邮箱、姓名、职位、社媒、企业官网等详细信息，助您轻松获客。
            </p>
            <a
              href="https://web.laifaxin.com/search"
              className="ud-main-btn features-bottom-btn"
              target="_blank"
            >
              体验
            </a>
          </div>
          <div className="right-content">
            <img src="/svg/features.svg" alt="Features Icon" />
          </div>
        </section>

        <section className="section ud-faq">
          <div className="frequently-faq">
            <h1>常见问题</h1>
            <p>来发信致力于给您提供最好的帮助与服务</p>
          </div>
          <div className="faq-row">
            <div className="faq-item">
              <span className="faq-title">👉 邮件群发，需要怎么做？</span>
              <p>
                1.上传或搜索客户邮箱;
                <br />
                2.创建邮件模板;
                <br />
                3.创建群发任务。
              </p>
            </div>
            <div className="faq-item">
              <span className="faq-title">
                👉 可以做到群发每封邮件不一样?如:邮件中含有每个客户的昵称?
              </span>
              <p>
                导入联系人时,导入联系人的昵称,创建主题或邮件正文时,插入昵称变量即可实现。
              </p>
            </div>
          </div>
          <div className="faq-row">
            <div className="faq-item">
              <span className="faq-title">👉 发信到达率多少？</span>
              <p>
                进收件箱的到达率涉及多个因素,内容是主要因素,你可以发送Gmail邮箱进行测试,进入Gmail垃圾箱,会提示进入垃圾箱原因。联系客服免费领取500~1000点数测试。
              </p>
            </div>
            <div className="faq-item">
              <span className="faq-title">
                👉 进垃圾箱的因素有哪些?怎么处理?
              </span>
              <p>
                进垃圾箱最大的因素是邮件内容,我们建议:内容尽可能简短、尽量不要带链接、尽量不要带明显的拦截词,比如折扣/价格/优惠等。
              </p>
            </div>
          </div>
          <div className="faq-row">
            <div className="faq-item">
              <span className="faq-title">👉 内容是否有特别限制?</span>
              <p>
                只要不违法/不违规/非金融类/非情趣类/非无版权产品,皆可提交发送。
              </p>
            </div>
            <div className="faq-item">
              <span className="faq-title">👉 怎么搜索容易找到对应的客户？</span>
              <p>根据语法进行搜索，具体语法说明及语法实例详见来发信网站。</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="frequently-faq">
            <h1>用户评价</h1>
            <p>用户真实反馈，来发信深受外贸和营销人士的喜爱</p>
          </div>
          <div className="flex-box">
            <div className="comment-item">
              <div>🌟🌟🌟🌟🌟</div>
              <div className="comment-content">
                来发信功能好强大啊，结合搜客的数据，绝绝子！作为精准开发前的筛选动作非常不错，直接把行业客户数据信息拉满，这个月已经开发到两个客户了，非常好用哈哈！还有一个世界500强的客户在报价阶段。
              </div>
              <div className="comment-bottom">
                <div className="comment-images">
                  <img src="/images/author-1.jpg" className="comment-img" />
                </div>
                <div>
                  <div>Anina</div>
                  <div className="comment-user">user of laifaxin</div>
                </div>
              </div>
            </div>
            <div className="comment-item">
              <div>🌟🌟🌟🌟🌟</div>
              <div className="comment-content">
                初步上手了客户搜索和邮件群发的功能，立马就收到了2个询盘，大大节约了我开发客户的时间，还能一键追踪客户有没有阅读邮件、点击链接、下载附件，能够精准营销，方便管理客户，功能非常强大且实用！
              </div>
              <div className="comment-bottom">
                <div className="comment-images">
                  <img src="/images/author-2.jpg" className="comment-img" />
                </div>
                <div>
                  <div>JIMMYsu</div>
                  <div className="comment-user">user of laifaxin</div>
                </div>
              </div>
            </div>
            <div className="comment-item">
              <div>🌟🌟🌟🌟🌟</div>
              <div className="comment-content">
                获客效率简直没得说，短短10分钟就能搞定上千个目标客户的筛选工作，这速度和精准度，极大地压缩了我们前期寻找和识别潜在客户的时间，让业务拓展的起步阶段变得如此高效，太赞了！
              </div>
              <div className="comment-bottom">
                <div className="comment-images">
                  <img src="/images/author-3.jpg" className="comment-img" />
                </div>
                <div>
                  <div>Charles</div>
                  <div className="comment-user">user of laifaxin</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="frequently-faq">
            <h1>为什么选择来发信</h1>
            <p>帮助外贸企业获取更多询盘和收入</p>
          </div>
          <div className="team-flex">
            <div className="team-item">
              <div className="team-icon-background">
                <img src="/svg/people.svg" />
              </div>
              <div className="team-content">10亿+</div>
              <div className="team-text">Contacts</div>
            </div>
            <div className="team-item">
              <div className="team-icon-background">
                <img src="/svg/company.svg" />
              </div>
              <div className="team-content">7千万+</div>
              <div className="team-text">Companies</div>
            </div>
            <div className="team-item">
              <div className="team-icon-background">
                <img src="/svg/enterprise.svg" />
              </div>
              <div className="team-content">1万+</div>
              <div className="team-text">Enterprises</div>
            </div>
            <div className="team-item">
              <div className="team-icon-background">
                <img src="/svg/user.svg" />
              </div>
              <div className="team-content">10万+</div>
              <div className="team-text">Users</div>
            </div>
          </div>
          <div className="team-button">
            <a
              href="https://web.laifaxin.com"
              className="ud-main-btn"
              target="_blank"
            >
              开始使用
            </a>
          </div>
        </section>

        <section className="section last-section">
          <div className="frequently-faq">
            <h1>外贸客户开发效率低? 试试来发信</h1>
            <p>免费试用，可随时升级套餐。</p>
          </div>
          <div className="contact-flex">
            <div className="contact-item">
              <div className="contact-icon">
                <img src="/svg/phone.svg" />
              </div>
              <div>
                <h4 className="contact-title">电话/微信</h4>
                <div className="contact-text">
                  <a
                    className="contact-contact"
                    href="https://cos.files.maozhishi.com/data/web/web-files/wx/tony-apan.png"
                    target="_blank"
                  >
                    17091913071
                  </a>
                  👈点击扫码
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src="/svg/mail.svg" />
              </div>
              <div>
                <h4 className="contact-title">咨询邮箱</h4>
                <div className="contact-text">
                  客服：
                  <a
                    className="contact-contact"
                    href="mailto:help@zhijixinxi.com"
                  >
                    help@zhijixinxi.com
                  </a>
                </div>
                <div className="contact-text">
                  合作：
                  <a
                    className="contact-contact"
                    href="mailto:bd@zhijixinxi.com"
                  >
                    bd@zhijixinxi.com
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src="/svg/location.svg" />
              </div>
              <div>
                <h4 className="contact-title">地址</h4>
                <div className="contact-text">江苏省南京市</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
