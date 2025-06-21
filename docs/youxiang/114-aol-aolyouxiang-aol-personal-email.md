---
id: 114-aol-aolyouxiang-aol-personal-email
title: 'AOL Mail (@aol.com): 应用程序密码登录'
description: '本文详细讲解如何在第三方客户端（如来发信）中设置AOL Mail（@aol.com）。内容覆盖登录AOL账户、生成并使用“应用程序密码”（App Password）完成绑定的完整步骤。'
tags: ['AOL Mail', 'AOL', '应用程序密码', 'App Password', 'IMAP', 'SMTP', '邮箱配置']
keywords:
  [
    'AOL Mail',
    'AOL',
    'aol.com',
    'IMAP',
    'SMTP',
    '应用程序密码',
    'App Password',
    '邮箱配置',
    '授权码',
    '第三方客户端',
  ]
---

# AOL Mail (@aol.com): 应用程序密码登录

AOL Mail 为保障账户安全，要求在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端中登录时，使用专门生成的 **<span style={{color: '#8e44ad'}}>“应用程序密码”</span>** (App Password)，而非您的主账户密码。其配置流程与 Yahoo Mail 非常相似。

:::tip
与许多需要开启两步验证的服务不同，AOL Mail 允许您在未开启两步验证的情况下直接生成应用程序密码。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置 AOL Mail 时，请使用以下服务器参数：

| **服务类型** | **服务器地址** | **SSL 端口** |
| :----------- | :------------- | :----------- |
| IMAP (收信)  | `imap.aol.com` | 993          |
| SMTP (发信)  | `smtp.aol.com` | 465          |

## 二、生成应用程序密码 {#generate-app-password}

请按照以下步骤，登录您的 AOL 账户并生成专用于第三方客户端的密码。

### 1. 访问账户信息 {#access-account-info}

- 登录 AOL Mail 官网：[https://mail.aol.com/](https://mail.aol.com/)
- 在邮箱主界面的右上角，点击 <span style={{color: '#3578e5'}}>【Options】</span>，然后从下拉菜单中选择 <span style={{color: '#3578e5'}}>【Account Info】</span>。

![从AOL Mail主界面进入账户信息](https://cos.files.maozhishi.com/data/web/web-files/img/1750065180493.png)
_图示：从AOL Mail主界面进入账户信息_

### 2. 进入账户安全设置 {#navigate-to-account-security}

- 在账户信息页面，从左侧菜单中选择 <span style={{color: '#3578e5'}}>【Account security】</span>。
- 在安全设置页面中，找到并点击 <span style={{color: '#3578e5'}}>【Generate app password】</span>。

![在账户安全页面找到并选择"生成应用程序密码"](https://cos.files.maozhishi.com/data/web/web-files/img/1750065180498.png)
_图示：在账户安全页面找到并选择“生成应用程序密码”_

### 3. 创建并复制密码 {#create-and-copy-password}

- 系统可能会显示一个介绍页面，点击 <span style={{color: '#3578e5'}}>【Get started】</span> 继续。

![开始生成应用程序密码流程](https://cos.files.maozhishi.com/data/web/web-files/img/1750065180499.png)
_图示：开始生成应用程序密码流程_

- 输入一个便于您识别的应用程序名称（例如"来发信"），然后点击 <span style={{color: '#3578e5'}}>【Generate password】</span>。

![为您的应用程序密码输入一个可识别的名称](https://cos.files.maozhishi.com/data/web/web-files/img/1750065180500.png)
_图示：为您的应用程序密码输入一个可识别的名称_

- 系统将生成一个16位的应用程序密码。请立即点击 <span style={{color: '#3578e5'}}>【Copy】</span> 并妥善保管该密码，然后点击 <span style={{color: '#3578e5'}}>【Done】</span>。

![成功生成16位应用程序密码并复制](https://cos.files.maozhishi.com/data/web/web-files/img/1750065180501.png)
_图示：成功生成16位应用程序密码并复制_

## 三、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“应用程序密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位应用程序密码**。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用应用程序密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1750065180502.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“应用程序密码”？**

  > - 答：“应用程序密码”是AOL为第三方客户端生成的特定密码，用于授权应用访问您的账户，而无需暴露您的主登录密码，从而增强账户安全性。

- **❓ 如果忘记了应用程序密码怎么办？**
  > - 答：应用程序密码无法找回。如果您忘记或丢失了它，可以回到 <span style={{color: '#3578e5'}}>【Account security】</span> 页面，重新生成一个。您也可以在该页面看到并管理所有已生成的密码。

### 学习建议 {#learning-suggestions}

- 🔐 **一客一码**：为每个不同的第三方客户端或设备生成独立的 <u><span style={{color: '#e67c00'}}>应用程序密码</span></u>，并清晰命名，便于未来管理或单独撤销授权。
- 📝 **安全存储**：将生成的 <u><span style={{color: '#e67c00'}}>应用程序密码</span></u> 立即保存在安全的密码管理器中，避免遗忘或泄露。
- 🔄 **定期审查**：定期访问AOL的 <span style={{color: '#3578e5'}}>【Account security】</span> 页面，检查并清理不再使用的应用程序密码，保持账户的整洁与安全。

### 相关阅读 {#related-reading}

- 📚 [Yahoo Mail (@yahoo.com) 配置指南](./102-yahu-yahooyouxiang-yahoo-personal-mailbox)
  - 了解 Yahoo Mail 的 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 生成流程，其步骤与 AOL Mail 高度相似。
- 📚 [谷歌邮箱 (Gmail) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 对比了解谷歌Gmail在开启两步验证后，是如何生成和使用 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 的。
- 📚 [微软邮箱 (@outlook.com) 配置指南](./108-weiruan-outlookyouxiang-microsoft-personal-email)
  - 学习微软邮箱在开启双重验证后如何创建和使用 **<span style={{color: '#8e44ad'}}>“应用密码”</span>**。
- 📚 [苹果iCloud邮箱 (@icloud.com) 配置指南](./113-pingguo-icloudyouxiang-apple-personal-email)
  - 参考苹果在启用双重认证后，生成 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** 的方法。
- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 了解国内主流服务商腾讯邮箱的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 登录方式，其功能与应用密码类似。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/114-aol-aolyouxiang-aol-personal-email
