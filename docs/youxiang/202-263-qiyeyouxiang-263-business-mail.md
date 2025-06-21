---
id: 202-263-qiyeyouxiang-263-business-mail
title: '263企业邮箱（@263.com）：客户端授权码登录指南'
description: '本文详细讲解如何为 263 企业邮箱开启并生成“客户端授权码”，以便在第三方邮件客户端（如来发信）中通过 IMAP/SMTP 协议安全地收发邮件。'
tags: ['263企业邮箱', '客户端授权码', 'IMAP', 'SMTP', '企业邮箱配置']
keywords: ['263企业邮箱', '263.net', '客户端授权码', 'IMAP', 'SMTP', '邮箱配置', '来发信']
---

# 263企业邮箱：客户端授权码登录

**<span style={{color: '#8e44ad'}}>263企业邮箱</span>** 是中国领先的企业邮箱服务商之一，凭借其众多的海外服务器节点，为外贸企业提供了稳定、及时的国际邮件收发保障。

与许多其他企业邮箱不同，263 企业邮箱出于安全考虑，**不允许** 直接使用主账户密码在第三方客户端（如 Foxmail、Thunderbird 或 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中登录。您必须首先登录网页版邮箱，为特定客户端生成一个独立的 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>**，并使用该授权码作为登录密码。

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置 263 企业邮箱时，请使用以下服务器参数：

| **服务类型** | **服务器地址** | **SSL 端口** |
| :----------- | :------------- | :----------- |
| IMAP (收信)  | `imap.263.net` | 993          |
| SMTP (发信)  | `smtp.263.net` | 465          |

## 二、生成客户端授权码 {#generate-authorization-code}

### 1. 进入账户安全设置 {#access-account-security-settings}

登录您的 263 网页邮箱后，点击右上角的用户头像，在下拉菜单中选择 <span style={{color: '#3578e5'}}>【设置】</span>。

![进入邮箱设置界面](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843829.png)
_图示：进入邮箱设置界面_

### 2. 开启并新增授权码 {#enable-and-add-authorization-code}

- 在设置页面，点击左侧的 <span style={{color: '#3578e5'}}>【账号安全】</span>。
- 找到 <span style={{color: '#3578e5'}}>【客户端授权码】</span> 选项，默认状态为“关闭”，请从下拉菜单中选择 <span style={{color: '#3578e5'}}>【开通】</span>。

![找到并准备开通客户端授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843831.png)
_图示：找到并准备开通客户端授权码_

- 在弹出的确认窗口中，点击 <span style={{color: '#3578e5'}}>【确定】</span>。

![确认开启客户端授权码功能](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843832.png)
_图示：确认开启客户端授权码功能_

### 3. 获取授权码 {#get-authorization-code}

- 成功开通后，点击 <span style={{color: '#3578e5'}}>【新增授权码】</span> 按钮。

![点击新增授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843830.png)
_图示：点击新增授权码_

- 为您的授权码输入一个便于识别的用途（例如“来发信”），然后点击 <span style={{color: '#3578e5'}}>【确定】</span>。

![为授权码命名并生成](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843813.png)
_图示：为授权码命名并生成_

- 系统会生成一个授权码，请立即 **复制** 并妥善保管。

## 三、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的授权码**。

![在密码框中输入客户端授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843837.png)
_图示：在密码框中输入客户端授权码_

- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示“正常”状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721146843812.png)
_图示：邮箱成功添加后显示【正常】状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么需要使用“客户端授权码”而不是邮箱密码？**

  > - 答：这是一种安全增强措施。使用 **<span style={{color: '#8e44ad'}}>授权码</span>** 可以避免在第三方应用中暴露您的主密码，降低密码泄露风险。您可以随时为单个应用撤销授权，而不影响主账户和其他应用。

- **❓ 如果忘记了授权码怎么办？**
  > - 答：授权码通常只在生成时显示一次。如果您忘记了，无法找回。您需要登录网页邮箱，删除旧的授权码，然后重新生成一个新的。

### 学习建议 {#learning-suggestions}

- 🔖 **命名管理**：为每个客户端或设备生成 **独立的** <u><span style={{color: '#e67c00'}}>授权码</span></u>，并使用清晰的用途描述（如“iPhone邮件”、“PC版来发信”）进行标记，方便日后管理。
- 🛡️ **定期审查**：定期登录网页邮箱，检查并删除不再使用的客户端授权码，保持账户安全。

### 关于 263 企业邮箱 {#about-263-enterprise-mailbox}

**<span style={{color: '#8e44ad'}}>263企业邮箱</span>** 是一款灵活、安全的商务办公工具。它拥有自主研发的 **<span style={{color: '#8e44ad'}}>TAP智能反垃圾网关</span>**，通过国家863项目A级验收，运用 AI 与大数据智能分析，实现垃圾邮件的精准区分。

- **官网**: [http://www.263.net](http://www.263.net/)

### 相关阅读 {#related-reading}

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  - 查看所有支持的企业邮箱服务商的配置指南，包括腾讯、阿里、谷歌等。
- 📚 [阿里云企业邮箱配置指南](./203-aliyun-qiyeyouxiang-alibaba-cloud-enterprise-mailbox)
  - 了解与 263 邮箱配置流程相似的 **<span style={{color: '#8e44ad'}}>阿里云企业邮箱</span>** 如何获取和使用授权码。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/202-263-qiyeyouxiang-263-business-mail
