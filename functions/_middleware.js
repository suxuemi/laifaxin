// A map of static redirects.
// All keys are normalized to not have a trailing slash.
const staticRedirects = {
  "/web-503-yinxiaoshuju-marketing-data":
    "https://www.laifa.xin/zhinan/email-mass-sending.html#marketing-data",
  "/web-502-youjianzhuizong-mail-tracking":
    "https://www.laifa.xin/zhinan/email-tracking",
  "/web-501-youjianqunfa-mass-mailing":
    "https://www.laifa.xin/zhinan/email-mass-sending",
  "/web-308-shituguanli-view-management":
    "https://www.laifa.xin/zhinan/contacts-tags-views",
  "/web-307-daoruyanzheng-email-import-verification":
    "https://www.laifa.xin/zhinan/email-verification",
  "/web-306-daochukehu-export-customers":
    "https://www.laifa.xin/zhinan/export-contacts",
  "/web-305-daorukehu-import-customers":
    "https://www.laifa.xin/zhinan/add-contacts#batch-import",
  "/web-304-ziduanguanli-field-management":
    "https://www.laifa.xin/zhinan/customer-fields",
  "/web-303-biaoqianyushaixuanguanli-tag-and-filter-management":
    "https://www.laifa.xin/zhinan/contacts-tags-views",
  "/web-302-bianjikehu-edit-customer":
    "https://www.laifa.xin/zhinan/manage-contacts#edit-contacts",
  "/web-300-kehuguanli-customer-management":
    "https://www.laifa.xin/zhinan/add-contacts",
  "/web-100-xinshourumen-getting-started":
    "https://www.laifa.xin/zhinan/what-is-laifaxin",
  "/207-zoho-qiyeyouxiang-zoho-enterprise-mailbox":
    "https://www.laifa.xin/youxiang/207-zoho-qiyeyouxiang-zoho-enterprise-mailbox",
  "/206-35-qiyeyouxiang-35-enterprise-mailbox":
    "https://www.laifa.xin/youxiang/206-35-qiyeyouxiang-35-enterprise-mailbox",
  "/205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox":
    "https://www.laifa.xin/youxiang/205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox",
  "/204-wangyi-qiyeyouxiang-netease-enterprise-mailbox":
    "https://www.laifa.xin/youxiang/204-wangyi-qiyeyouxiang-netease-enterprise-mailbox",
  "/203-aliyun-qiyeyouxiang-alibaba-cloud-enterprise-mailbox":
    "https://www.laifa.xin/youxiang/203-aliyun-qiyeyouxiang-alibaba-cloud-enterprise-mailbox",
  "/202-263-qiyeyouxiang-263-business-mail":
    "https://www.laifa.xin/youxiang/202-263-qiyeyouxiang-263-business-mail",
  "/201-guge-qiyeyouxiang-google-business-mail":
    "https://www.laifa.xin/youxiang/201-guge-qiyeyouxiang-google-business-mail",
  "/200-qiyeyouxiang-enterprise-mailbox":
    "https://www.laifa.xin/youxiang/200-qiyeyouxiang-enterprise-mailbox",
  "/116-mailru-mailyouxiang-mail-personal-email":
    "https://www.laifa.xin/youxiang/116-mailru-mailyouxiang-mail-personal-email",
  "/115-yandex-yandexyouxiang-yandex-personal-email":
    "https://www.laifa.xin/youxiang/115-yandex-yandexyouxiang-yandex-personal-email",
  "/114-aol-aolyouxiang-aol-personal-email":
    "https://www.laifa.xin/youxiang/114-aol-aolyouxiang-aol-personal-email",
  "/113-pingguo-icloudyouxiang-apple-personal-email":
    "https://www.laifa.xin/youxiang/113-pingguo-icloudyouxiang-apple-personal-email",
  "/112-wanmei-88youxiang-perfect-personal-mailbox":
    "https://www.laifa.xin/youxiang/112-wanmei-88youxiang-perfect-personal-mailbox",
  "/111-dianxin-21cnyouxiang-telecom-personal-mailbox":
    "https://www.laifa.xin/youxiang/111-dianxin-21cnyouxiang-telecom-personal-mailbox",
  "/110-yidong-139youxiang-china-mobile-personal-email":
    "https://www.laifa.xin/youxiang/110-yidong-139youxiang-china-mobile-personal-email",
  "/109-xinlang-sinayouxiang-sina-personal-email":
    "https://www.laifa.xin/youxiang/109-xinlang-sinayouxiang-sina-personal-email",
  "/108-weiruan-outlookyouxiang-microsoft-personal-email":
    "https://www.laifa.xin/youxiang/108-weiruan-outlookyouxiang-microsoft-personal-email",
  "/107-wangyi-163youxiang-netease-personal-email":
    "https://www.laifa.xin/youxiang/107-wangyi-163youxiang-netease-personal-email",
  "/106-tengxun-qqyouxiang-tencent-personal-email":
    "https://www.laifa.xin/youxiang/106-tengxun-qqyouxiang-tencent-personal-email",
  "/105-souhu-sohuyouxiang-sohu-personal-email":
    "https://www.laifa.xin/youxiang/105-souhu-sohuyouxiang-sohu-personal-email",
  "/104-dianxin-189youxiang-telecom-personal-mailbox":
    "https://www.laifa.xin/youxiang/104-dianxin-189youxiang-telecom-personal-mailbox",
  "/103-ali-aliyunyouxiang-ali-personal-email":
    "https://www.laifa.xin/youxiang/103-ali-aliyunyouxiang-ali-personal-email",
  "/100-gerenyouxiang-personal-mailbox":
    "https://www.laifa.xin/youxiang/100-gerenyouxiang-personal-mailbox",
  "/505-how-to-display-my-mailbox-and-nickname-in-mass-mailing":
    "https://www.laifa.xin/zhinan/email-templates",
  "/504-how-to-carry-out-mass-email-marketing-continuously-and-orderly":
    "https://www.laifa.xin/zhinan/customer-management-section",
  "/503-what-are-the-commonly-used-screening-for-foreign-trade-customer-management":
    "https://www.laifa.xin/zhinan/contacts-tags-views#view-examples",
  "/502-what-are-the-commonly-used-tags-for-foreign-trade-customer-management":
    "https://www.laifa.xin/zhinan/contacts-tags-views#tag-examples",
  "/501-how-to-efficiently-manage-multi-country-and-multi-product-customers":
    "https://www.laifa.xin/zhinan/contacts-tags-views#contacts-tags",
  "/405-youjianqianming-signature-of-parcel":
    "https://www.laifa.xin/zhinan/email-signature",
  "/404-youjianzhuizong-mailtracking":
    "https://www.laifa.xin/zhinan/email-tracking",
  "/403-shouquyuguanliyoujian-receiving-and-managing-mail":
    "https://www.laifa.xin/zhinan/check-new-emails",
  "/402-xiexinyoujian-write-new-mail":
    "https://www.laifa.xin/zhinan/compose-new-email",
  "/401-tianjiayouxiang-add-mailbox":
    "https://www.laifa.xin/zhinan/email-account",
  "/306-fujianguanli-attachment-management":
    "https://www.laifa.xin/zhinan/attachment-management",
  "/305-tupiancharu-tuchuang-picture-insert":
    "https://www.laifa.xin/zhinan/email-editing#insert-image",
  "/304-wodeyouxiang-my-email":
    "https://www.laifa.xin/zhinan/email-account#manage-email",
  "/303-yingxiaoyoujianzhengwen-marketing-email-body":
    "https://www.laifa.xin/zhinan/email-templates#email-content-variables-signature",
  "/302-yingxiaoyoujianzhuti-marketing-email-subject":
    "https://www.laifa.xin/zhinan/email-templates#email-subject-variable",
  "/301-dianziyoujianpiliangqunfa-bulk-email-sending-emailmarketing":
    "https://www.laifa.xin/zhinan/email-mass-sending",
  "/207-piliangdaochukehu-export-customers-in-bulk":
    "https://www.laifa.xin/zhinan/export-contacts",
  "/206-dianziyouxiangyanzheng-e-mail-verification":
    "https://www.laifa.xin/zhinan/email-verification",
  "/205-piliangguanlikehu-manage-customers-in-bulk":
    "https://www.laifa.xin/zhinan/manage-contacts#batch-manage-contacts-section",
  "/203-guanlikehu-manage-customers":
    "https://www.laifa.xin/zhinan/manage-contacts",
  "/202-bianjikehu-edit-customer":
    "https://www.laifa.xin/zhinan/manage-contacts#edit-contacts",
  "/chajian/google-maps-plugin-welcome.html":
    "https://www.laifa.xin/google-maps",
  "/txy": "https://curl.qcloud.com/bX0DAwi4",
  "/txy-th":
    "https://cloud.tencent.com/act/cps/redirect?redirect=35544&cps_key=02abdcd3478305f63cf2d819c7b9d278",
  "/txy-th2":
    "https://cloud.tencent.com/act/cps/redirect?redirect=34081&cps_key=02abdcd3478305f63cf2d819c7b9d278",
  "/txy-qqg": "https://curl.qcloud.com/5uHFqtbq",
  "/vu": "https://www.vultr.com/?ref=8978846-8H",
  "/txy-gj": "https://curl.qcloud.com/LYWPAA5U",
  "/putty": "https://dd.laifa.xin/putty.exe",
  "/fs-mac": "https://dd.laifa.xin/fs_osx.pkg",
  "/fs-win": "https://dd.laifa.xin/fs_win.exe",
  "/appnode": "https://bbs.maozhishi.com/d/25-appnode",
  "/ssh": "https://bbs.maozhishi.com/d/26-ssh",
  "/ym-fwq": "https://bbs.maozhishi.com/d/27",
  "/ym": "https://www.cloudflare.com/zh-cn/",
  "/blocksy-pro": "https://dd.laifa.xin/blocksy-companion-pro.zip",
  "/wzcj": "https://bbs.maozhishi.com/d/30",
  "/txy-xj": "https://curl.qcloud.com/LYWPAA5U",
  "/xly-alyp": "https://www.aliyundrive.com/s/vxcAsQsHBM2",
  "/fwq-jc": "https://bbs.maozhishi.com/d/76",
  "/kfx-01": "https://bbs.maozhishi.com/d/77",
  "/xly-xgzy": "https://kdocs.cn/l/cmqN6MrsslVj",
  "/sk-wjwc": "https://bbs.maozhishi.com/d/174",
  "/gg-automa":
    "https://google.com//search?q=%E6%9D%A5%E5%8F%91%E4%BF%A1&num=100",
  "/wa-automa": "https://web.whatsapp.com",
  "/wa-automa/send": "https://web.whatsapp.com/send",
  "/wa-fswc": "https://bbs.maozhishi.com/d/182",
  "/mhy-tg": "https://web.laifaxin.com/regist/Z7QMPY",
  "/souke": "https://web.laifaxin.com/regist/ZZR6W5",
  "/txy-cos":
    "https://cloud.tencent.com/act/cps/redirect?redirect=10042&cps_key=02abdcd3478305f63cf2d819c7b9d278",
  "/web-lianxiren-contact": "https://web.laifaxin.com/contacts/contacts",
  "/web-huishouzhan-recycle-bin": "https://web.laifaxin.com/contacts/recycle",
  "/web-kehuyulan-customer-preview": "https://web.laifaxin.com/search/preview",
  "/web-kehusousuo-customer-search": "https://web.laifaxin.com/search/tasks",
  "/web-daorulishi-import-history":
    "https://web.laifaxin.com/contacts/import-history",
  "/web-daochulishi-export-history":
    "https://web.laifaxin.com/contacts/export-history",
  "/web-youjianqunfa-marketing": "https://web.laifaxin.com/marketing/tasks",
  "/web-shujuzonglan-overview": "https://web.laifaxin.com/reports/overview",
  "/web-zhanghuyue-account-balance":
    "https://web.laifaxin.com/expenses/balance",
  "/web-youjianmuban-templets": "https://web.laifaxin.com/settings/templets",
  "/web-kehuziduan-fields": "https://web.laifaxin.com/settings/fields",
  "/web-youjianqianming-signatures":
    "https://web.laifaxin.com/settings/signatures",
  "/xp52-txy-cf":
    "https://www.xunpan.wang/wangzhanyouhua-tengxunyun-cos-cloudflrea-cdn/",
  "/web-biaoqianguanli-tags": "https://web.laifaxin.com/settings/tags",
  "/ggsskh": "https://www.xunpan.wang/google-search-customer/",
  "/jz-seo-hd-hm":
    "https://cos.files.maozhishi.com/public/attachments/lfx/1665824213565.png",
  "/txy-1111":
    "https://cloud.tencent.com/act/cps/redirect?redirect=2853&cps_key=02abdcd3478305f63cf2d819c7b9d278&from=console",
  "/txy-ql":
    "https://cloud.tencent.com/act/cps/redirect?redirect=30206&cps_key=02abdcd3478305f63cf2d819c7b9d278",
  "/txy-kj":
    "https://cloud.tencent.com/act/cps/redirect?redirect=35544&cps_key=02abdcd3478305f63cf2d819c7b9d278",
  "/reg": "https://app.laifaxin.com/regist/z7pvkp",
  "/log": "https://app.laifaxin.com/login/z7pvkp",
  "/hd": "https://www.laifa.xin/zhinan/106-huodonghuizong-activity-summary",
  "/txy-jc":
    "https://www.yuque.com/docs/share/439d8f2f-3e34-4218-8ca9-bd824cc3306a",
  "/wx/shasha.png": "https://lfx-web-ali.laifa.xin/img/kf/web.png",
  "/img/kf/web.png": "https://lfx-web-ali.laifa.xin/img/kf/wx-mhy.png",
  "/linda":
    "https://www.notion.so/ilinda/SOHO-6efbbb7c076c4a51b2f4ff1edb6c4011",
  "/txy-yjts":
    "https://cloud.tencent.com/act/cps/redirect?redirect=33757&cps_key=02abdcd3478305f63cf2d819c7b9d278",
  "/aly-yjts":
    "https://www.aliyun.com/product/directmail?source=5176.11533457&userCode=eqhf7yrt",
  "/kuaisou": "https://web.laifaxin.com/regist/ZZR74F",
  "/sousou": "https://web.laifaxin.com/regist/ZZR7BU",
  "/hm/gjh-wxhm01": "https://cos.files.maozhishi.com/data/img/wxhm/kimi.jpg",
  "/ggdt": "https://www.laifa.xin/google-maps",
  "/khkf": "https://www.laifa.xin/zhinan/search-logic-section",
};

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Normalize pathname by removing trailing slash (if not root)
  let { pathname } = url;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  // Rule 1: Handle static redirects from the map using the normalized path.
  if (pathname in staticRedirects) {
    const destination = staticRedirects[pathname];
    return Response.redirect(destination, 301);
  }

  // Rule 2: Remove .html extension.
  // This check is independent of the trailing slash normalization.
  if (url.pathname.endsWith(".html")) {
    const destination = url.href.slice(0, -5); // "https://.../path.html" -> "https://.../path"
    return Response.redirect(destination, 301);
  }

  // If no rules match, continue to the requested page.
  return context.next();
}
