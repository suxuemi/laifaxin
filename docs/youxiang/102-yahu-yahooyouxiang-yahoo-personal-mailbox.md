---
id: 102-yahu-yahooyouxiang-yahoo-personal-mailbox
title: '雅虎邮箱 (@yahoo.com): 生成并使用应用程式密码'
description: 本文详细讲解如何在第三方客户端绑定雅虎邮箱（yahoo.com）进行邮件收发，包括生成应用程式密码的步骤。
tags: ['雅虎邮箱', 'Yahoo Mail', '应用程式密码', '邮箱配置']
keywords: ['雅虎邮箱', 'Yahoo', '应用程式密码', 'IMAP', 'SMTP', '第三方客户端']
---

# 雅虎邮箱 (@yahoo.com): 生成并使用应用程式密码

雅虎邮箱 (Yahoo Mail) 是一款全球性的电子邮件服务。本指南将详细介绍如何为您的雅虎邮箱生成专用的 **<span style={{color: '#8e44ad'}}>应用程式密码</span>**，并将其成功绑定到 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端，实现邮件的顺畅收发。

:::info
👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 内置海外邮件节点，无需额外代理即可稳定访问和收发雅虎邮箱的邮件。
:::

:::warning
为成功绑定雅虎邮箱，您必须使用生成的 **<span style={{color: '#8e44ad'}}>应用程式密码</span>** 进行登录，而不是您的主账户密码。如需了解在平台添加邮箱的基础操作，请参阅 📚[邮箱账号管理](../zhinan/email-account)。
:::

## 一、核心参数配置 {#core-parameters-configuration}

| **类型** | **服务器地址** | **SSL端口** |
| :---: | :---: | :---: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `imap.mail.yahoo.com` | `993` |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> | `smtp.mail.yahoo.com` | `465` |

## 二、生成应用程式密码 {#generate-app-password}

### 1. 访问账户信息页面

首先，登录您的 📚[雅虎邮箱](https://login.yahoo.com/)。登录后，点击页面右上角的您的姓名或头像，在下拉菜单中选择 <span style={{color: '#3578e5'}}>【账户资料】</span>。

![访问雅虎账户资料](https://cos.files.maozhishi.com/data/web/web-files/img/1721137964266.png)

_图示：从右上角菜单进入“账户资料”页面_

### 2. 进入应用程式密码设置

在账户信息页面，点击左侧导航栏中的 <span style={{color: '#3578e5'}}>【账户安全性】</span>。然后，在安全性页面中找到并点击 <span style={{color: '#3578e5'}}>【产生应用程式密码】</span> 或 <span style={{color: '#3578e5'}}>【管理应用程式密码】</span>。

![进入账户安全性设置](https://cos.files.maozhishi.com/data/web/web-files/img/1721137964268.png)

_图示：在“账户安全性”中找到生成应用程式密码的选项_

### 3. 创建应用程式密码

在弹出的窗口中，输入一个可识别的应用名称（例如，<u><span style={{color: '#e67c00'}}>来发信</span></u>），然后点击 <span style={{color: '#3578e5'}}>【产生密码】</span> 按钮。

![输入应用名称](https://cos.files.maozhishi.com/data/web/web-files/img/1721137964267.png)

_图示：为您的应用程式密码命名以便于管理_

### 4. 保存应用程式密码

雅虎会生成一个 16 位的 **<span style={{color: '#8e44ad'}}>应用程式密码</span>**。<u><span style={{color: '#d93025'}}>请务必立即复制并妥善保管此密码</span></u>，因为它只会出现一次。

![生成并复制密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721137964279.png)

_图示：生成的16位一次性应用程式密码_

## 三、绑定邮箱账号 {#bind-email-account}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加雅虎邮箱账户时，在密码字段中输入刚刚生成的 16 位 **<span style={{color: '#8e44ad'}}>应用程式密码</span>**。

![在来发信中输入应用程式密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721137964269.png)

_图示：在密码框中粘贴16位应用程式密码_

绑定成功后，邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![绑定成功状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721137964284.png)

_图示：邮箱状态显示正常，表示绑定成功_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么我找不到"产生应用程式密码"的选项？**
> - 答：这通常意味着您的账户尚未启用 **<span style={{color: '#8e44ad'}}>两步验证</span>**。雅虎要求必须先开启两步验证，才能生成应用程式密码。请先在 <span style={{color: '#3578e5'}}>【账户安全性】</span> 页面完成两步验证的设置。

- **❓ 应用程式密码和我的登录密码有什么区别？**
> - 答：**<span style={{color: '#8e44ad'}}>应用程式密码</span>** 是专门为第三方应用设计的独立密码，它允许应用访问您的邮箱，而无需暴露您的主登录密码。这是一种更安全的方式，即使应用密码泄露，您的主账户依然安全。

### 学习建议 {#learning-suggestions}

- 🎯 **安全存储**：建议使用密码管理器（如 1Password 或 Bitwarden）来安全地存储生成的 **<span style={{color: '#8e44ad'}}>应用程式密码</span>**，以防丢失。
- 📖 **定期审查**：定期访问雅虎的 <span style={{color: '#3578e5'}}>【账户安全性】</span> 页面，审查并删除不再使用的应用程式密码，保持账户的整洁与安全。
- ⚙️ **探索平台功能**：成功绑定后，深入探索 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 的 📚[邮件追踪](../zhinan/email-tracking)、📚[群发任务](../zhinan/email-mass-sending) 和 📚[邮件列表](../zhinan/email-list) 功能，全面提升您的邮件处理效率。

### 相关阅读 {#related-reading}

- 📚 [个人邮箱列表](./100-gerenyouxiang-personal-mailbox)
  - 返回个人邮箱列表，查看其他主流邮箱服务商（如 <u><span style={{color: '#e67c00'}}>Gmail</span></u>、<u><span style={{color: '#e67c00'}}>Outlook</span></u>）的 **<span style={{color: '#8e44ad'}}>配置指南</span>**。
- 📚 [谷歌邮箱 (@gmail.com) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 了解如何为 **<span style={{color: '#8e44ad'}}>谷歌邮箱</span>** 启用两步验证并生成应用密码，这是另一种常见的个人邮箱配置流程。
- 📚 [企业邮箱列表](./200-qiyeyouxiang-enterprise-mailbox)
  - 如果您也使用企业邮箱，可以查阅此列表，了解不同 **<span style={{color: '#8e44ad'}}>企业邮箱服务商</span>** 的配置方法。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/102-yahu-yahooyouxiang-yahoo-personal-mailbox

