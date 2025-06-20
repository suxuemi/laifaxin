---
id: 101-guge-gmailyouxiang-google-personal-email
title: '谷歌邮箱 (@gmail.com): 启用两步验证与应用密码'
description: 本文详细讲解如何在第三方客户端绑定谷歌免费邮箱（Gmail）进行邮件收发，包括开启两步验证和生成应用专用密码的步骤。
tags: ['谷歌邮箱', 'Gmail', '两步验证', '应用密码', '邮箱配置']
keywords: ['谷歌邮箱', 'Gmail', '两步验证', '应用专用密码', 'IMAP', 'SMTP', '第三方客户端']
---

# 谷歌邮箱 (@gmail.com): 启用两步验证与应用密码

Gmail 是由 Google 提供的流行电子邮件服务，分为免费的 <u><span style={{color: '#e67c00'}}>个人邮箱</span></u> ([@gmail.com](https://gmail.com)) 和付费的 <u><span style={{color: '#e67c00'}}>企业邮箱</span></u> (Google Workspace)。本指南将详细介绍如何为您的个人 Gmail 账户启用安全设置，并将其成功绑定到 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端。

:::warning
为成功绑定个人谷歌邮箱，您必须完成以下两个核心步骤：
1.  在您的 Google 账户中 **启用两步验证**。
2.  为 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 生成一个专用的 **<span style={{color: '#8e44ad'}}>应用密码</span>**，并使用此密码进行登录。

如需了解在平台添加邮箱的基础操作，请参阅 📚[邮箱账号管理](../zhinan/email-account)。
:::

## 一、重要安全建议 {#important-security-recommendations}

- 🌐 **网络访问**：👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 内置海外邮件节点，无需额外代理即可稳定收发 Gmail 邮件。
- 🔓 **登录方式**：我们 **强烈推荐** 使用 **<span style={{color: '#8e44ad'}}>“两步验证 + 应用密码”</span>** 的方式登录，这是最安全的方法。虽然您可以开启 <u><span style={{color: '#d93025'}}>“允许安全性较低的应用”</span></u> 来直接使用账户密码登录，但这会显著降低您账户的安全性。
- 🔑 **密码安全**：使用 **<span style={{color: '#8e44ad'}}>应用密码</span>** 的好处是，即使该密码泄露，您的主账户密码依然安全，有效保护您的谷歌账户。

## 二、核心参数配置 {#core-parameters-configuration}

| **类型** | **服务器地址** | **SSL端口** |
| :---: | :---: | :---: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `imap.gmail.com` | `993` |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> | `smtp.gmail.com` | `465` |

## 三、开启两步验证 {#enable-two-step-verification}

### 1. 访问安全设置

您可以直接访问 📚[Google 安全设置页面](https://myaccount.google.com/security)。登录后，找到 <span style={{color: '#3578e5'}}>【两步验证】</span> 选项并点击进入。

![进入两步验证设置](https://cos.files.maozhishi.com/data/web/web-files/img/20240716201913.png)

_图示：通过“安全性”选项卡找到“两步验证”设置_

### 2. 开始验证流程

点击 <span style={{color: '#3578e5'}}>【开始】</span> 按钮，并根据提示输入您的 Google 账户密码以验证身份。

![开始两步验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721051705288.png)

_图示：点击开始按钮，启动两步验证设置向导_

### 3. 验证手机号码

输入您希望用于接收验证码的手机号码，然后选择通过 <span style={{color: '#3578e5'}}>【短信】</span> 方式获取验证码。

![验证身份](https://cos.files.maozhishi.com/data/web/web-files/img/1721051705289.png)

_图示：输入手机号码以验证身份_

![输入手机号码](https://cos.files.maozhishi.com/data/web/web-files/img/1721051705290.png)

_图示：选择通过短信接收验证码_

### 4. 完成验证

输入您收到的验证码，点击 <span style={{color: '#3578e5'}}>【下一步】</span>。验证成功后，点击 <span style={{color: '#3578e5'}}>【开启】</span> 按钮即可完成两步验证的设置。

![成功开启两步验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721051705291.png)

_图示：点击开启，正式启用两步验证功能_

## 四、生成应用密码 {#generate-app-password}

### 1. 访问应用密码页面

开启两步验证后，访问 📚[Google 应用密码页面](https://myaccount.google.com/apppasswords)。

![访问应用密码页面](https://cos.files.maozhishi.com/data/web/web-files/img/20240716204430.png)

_图示：通过安全性设置顶部的搜索框快速找到“应用密码”_

### 2. 创建应用密码

在“应用密码”页面，为您的应用命名（例如，<u><span style={{color: '#e67c00'}}>来发信</span></u>），然后点击 <span style={{color: '#3578e5'}}>【创建】</span>。

![输入应用名称并创建](https://cos.files.maozhishi.com/data/web/web-files/img/20240716210836.png)

_图示：为应用密码设置一个可识别的名称_

### 3. 保存应用密码

Google 会生成一个 16 位的 **<span style={{color: '#8e44ad'}}>应用密码</span>**。<u><span style={{color: '#d93025'}}>请务必立即复制并妥善保管此密码</span></u>，因为此密码只会出现一次。

![生成并保存应用密码](https://cos.files.maozhishi.com/data/web/web-files/img/20240716211011.png)

_图示：生成的16位应用专用密码_

## 五、绑定邮箱账号 {#bind-email-account}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加 Gmail 账户时，在密码字段中输入刚刚生成的 16 位 **<span style={{color: '#8e44ad'}}>应用密码</span>**，而不是您的主登录密码。

:::tip
如果输入的密码不是16位的 **<span style={{color: '#8e44ad'}}>应用密码</span>**，将会导致绑定失败。
:::

![在来发信中输入应用密码](https://cos.files.maozhishi.com/data/web/web-files/img/20240716211217.png)

_图示：在密码框中粘贴16位应用密码_

## 六、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么绑定时提示 “IMAP not enabled”？**
> - 答：这是因为您的 Gmail 账户尚未开启 IMAP 协议。您需要访问 📚[Gmail 转发和 POP/IMAP 设置页面](https://mail.google.com/mail/u/0/#settings/fwdandpop)，在 <u><span style={{color: '#e67c00'}}>IMAP access</span></u> 部分，选择 <span style={{color: '#3578e5'}}>【Enable IMAP】</span>，最后点击 <span style={{color: '#3578e5'}}>【Save Changes】</span>。

- **❓ 我可以不使用“应用密码”，直接用登录密码吗？**
> - 答：技术上可以，但这需要您在 Google 账户中开启 **<span style={{color: '#8e44ad'}}>“允许安全性较低的应用”</span>** 访问权限。我们 <u><span style={{color: '#d93025'}}>强烈不推荐</span></u> 这样做，因为它会使您的账户面临更高的安全风险。

### 学习建议 {#learning-suggestions}

- 🎯 **密码管理器**：建议使用密码管理器（如 1Password 或 Bitwarden）来安全地存储生成的 **<span style={{color: '#8e44ad'}}>应用密码</span>**。
- 📖 **定期审查**：定期访问您的 📚[Google 应用密码页面](https://myaccount.google.com/apppasswords)，审查并删除不再使用的应用密码，保持账户整洁与安全。
- ⚙️ **探索平台功能**：成功绑定后，深入探索 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 的 📚[邮件追踪](../zhinan/email-tracking)、📚[群发任务](../zhinan/email-mass-sending) 和 📚[模板](../zhinan/email-templates) 功能，提升您的邮件营销效率。

### 相关阅读 {#related-reading}

- 📚 [企业邮箱：谷歌企业邮（Google Workspace）](./201-guge-qiyeyouxiang-google-business-mail)
  - 如果您使用的是 Google Workspace 提供的 **<span style={{color: '#8e44ad'}}>企业邮箱</span>**，请参阅此指南了解其特定的配置方法。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/101-guge-gmailyouxiang-google-personal-email

