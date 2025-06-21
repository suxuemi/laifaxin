---
id: 113-pingguo-icloudyouxiang-apple-personal-email
title: '苹果iCloud邮箱 (@icloud.com): IMAP/SMTP 与 App 专用密码配置'
description: '本文详细讲解如何在第三方客户端（如来发信）中设置苹果iCloud邮箱（@icloud.com）。内容覆盖开启双重认证、登录Apple ID官网生成并使用“App专用密码”完成绑定的完整步骤。'
tags: ['苹果邮箱', 'iCloud', 'App专用密码', 'IMAP', 'SMTP', '双重认证']
keywords:
  [
    '苹果邮箱',
    'iCloud',
    'icloud.com',
    'me.com',
    'Apple ID',
    'IMAP',
    'SMTP',
    'App专用密码',
    '两步验证',
    '双重认证',
    '邮箱配置',
  ]
---

# 苹果iCloud邮箱 (@icloud.com): IMAP/SMTP 与 App 专用密码配置

为保障账户的最高安全性，Apple 要求在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端中配置iCloud邮箱 (@icloud.com) 时，**必须** 使用专门的 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** (App-Specific Password)。直接使用您的 Apple ID 主密码将无法登录。

:::warning
在生成“App 专用密码”之前，您 **必须** 为您的 Apple ID [开启双重认证](https://support.apple.com/zh-cn/HT204915)。如果尚未开启，请先完成该步骤。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置iCloud邮箱时，请使用以下服务器参数。这些参数同时适用于 `@icloud.com`、`@me.com` 和 `@mac.com` 的邮箱地址。

| **服务类型** | **服务器地址**     | **SSL 端口** |
| :----------- | :----------------- | :----------- |
| IMAP (收信)  | `imap.mail.me.com` | 993          |
| SMTP (发信)  | `smtp.mail.me.com` | 587 (或 465) |

## 二、生成 App 专用密码 {#generate-app-specific-password}

在确保双重认证已开启后，请按照以下步骤生成用于登录第三方客户端的专用密码。

### 1. 登录 Apple ID 管理页面 {#login-to-apple-id}

- 访问 Apple ID 官方管理页面：[https://appleid.apple.com/](https://appleid.apple.com/)
- 使用您的 Apple ID 和密码登录，并完成双重认证验证。
- 登录后，导航至 <span style={{color: '#3578e5'}}>【登录与安全】</span> 部分，然后选择 <span style={{color: '#3578e5'}}>【App 专用密码】</span>。

![访问 Apple ID 官网并进入“App 专用密码”设置](https://cos.files.maozhishi.com/data/web/web-files/img/1721144996585.png)
_图示：访问 Apple ID 官网并进入“App 专用密码”设置_

### 2. 创建并复制专用密码 {#create-and-copy-password}

- 点击 <span style={{color: '#3578e5'}}>【生成 App 专用密码】</span> 或 “+” 图标。
- 为密码设置一个便于识别的标签（例如“来发信”），然后点击 <span style={{color: '#3578e5'}}>【创建】</span>。

![输入一个便于识别的密码标签](https://cos.files.maozhishi.com/data/web/web-files/img/1721144996586.png)
_图示：输入一个便于识别的密码标签_

- Apple 会生成一个格式为 `xxxx-xxxx-xxxx-xxxx` 的16位专用密码。请立即点击 <span style={{color: '#3578e5'}}>【复制】</span> 并妥善保管，因为此密码仅会显示一次。

![成功生成并复制 App 专用密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721144996587.png)
_图示：成功生成并复制 App 专用密码_

## 三、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位 App 专用密码** (包括连字符)。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用 App 专用密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1721144996584.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么必须开启双重认证？**

  > - 答：双重认证是 Apple 的一项核心安全功能。要求为第三方客户端使用 App 专用密码是这项安全策略的延伸，旨在确保即使某个应用的密码泄露，您的主 Apple ID 账户依然安全。

- **❓ 如果我忘记了 App 专用密码怎么办？**

  > - 答：App 专用密码无法找回。如果您忘记了它，可以登录 Apple ID 管理页面，在 <span style={{color: '#3578e5'}}>【App 专用密码】</span> 部分撤销（删除）旧密码，然后重新生成一个即可。

- **❓ 我可以为多个应用使用同一个 App 专用密码吗？**
  > - 答：技术上可以，但强烈建议不要这样做。为每个应用创建独立的专用密码是最佳安全实践，这样如果某个应用出现问题，您可以只撤销该应用的访问权限，而不影响其他应用。

### 学习建议 {#learning-suggestions}

- 🔐 **清晰标记**：在生成 <u><span style={{color: '#e67c00'}}>App 专用密码</span></u> 时，务必使用清晰的标签（如“张三的MacBook-来发信”），以便日后管理。
- 📝 **安全存储**：生成后立即将 <u><span style={{color: '#e67c00'}}>App 专用密码</span></u> 保存在安全的密码管理器中。
- 🔄 **定期审查**：定期访问 Apple ID 管理页面，查看和清理不再使用的 App 专用密码，保持账户安全。

### 相关阅读 {#related-reading}

- 📚 [谷歌邮箱 (Gmail) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 了解谷歌Gmail的 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 机制，它与苹果的 App 专用密码功能类似。
- 📚 [微软邮箱 (@outlook.com) 配置指南](./108-weiruan-outlookyouxiang-microsoft-personal-email)
  - 对比学习微软邮箱如何在开启双重验证后使用 **<span style={{color: '#8e44ad'}}>“应用密码”</span>**。
- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 参考国内主流服务商腾讯邮箱的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 登录方式。
- 📚 [网易邮箱 (@163.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 探索网易邮箱体系中类似的 **<span style={{color: '#8e44ad'}}>“客户端授权密码”</span>** 设置流程。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/113-pingguo-icloudyouxiang-apple-personal-email
