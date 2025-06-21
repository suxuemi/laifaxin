---
id: 108-weiruan-outlookyouxiang-microsoft-personal-email
title: "微软邮箱 (@outlook.com): IMAP/SMTP 与应用密码配置"
description: 本文详细讲解如何在第三方邮件客户端（如来发信）中设置微软个人邮箱（@outlook.com, @hotmail.com），并指导您一步步开启双重验证、生成并使用“应用密码”完成登录。
tags: ["微软邮箱", "Outlook", "Hotmail", "IMAP", "SMTP", "应用密码", "双重验证"]
keywords:
  [
    "微软邮箱",
    "Outlook",
    "Hotmail",
    "office365",
    "IMAP",
    "SMTP",
    "应用密码",
    "双重验证",
    "两步验证",
    "客户端配置",
  ]
---

# 微软邮箱 (@outlook.com): IMAP/SMTP 与应用密码配置

微软邮箱（包括 @outlook.com, @hotmail.com 等）作为全球主流的电子邮件服务商，采取了严格的安全策略。要在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方客户端上进行配置，您 **必须** 首先启用 **<span style={{color: '#8e44ad'}}>“双重验证”</span>**，然后生成一个专用的 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 用于登录。

:::tip
微软邮箱的绑定流程可以总结为：

1.  **启用双重验证**：为您的微软账户增加一层安全保护。
2.  **生成应用密码**：创建一个专用于第三方客户端的特殊密码。
3.  **使用应用密码登录**：在客户端的密码字段中输入此应用密码。
    :::

## 一、核心参数配置 {#core-parameters-configuration}

|                      **服务类型**                      |     **服务器地址**      | **端口 (SSL/TLS)** |
| :----------------------------------------------------: | :---------------------: | :----------------: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `outlook.office365.com` |       `993`        |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> |  `smtp.office365.com`   |  `587` (STARTTLS)  |

:::info
请注意，SMTP端口为 `587`，并且需要使用 `STARTTLS` 加密方式。如果您的客户端无法自动识别，请手动选择此选项。
:::

## 二、获取应用密码 {#get-app-password}

### 1. 开启双重验证 {#enable-two-step-verification}

首先，登录您的 📚[微软账户安全中心](https://account.live.com/proofs/Manage/)。找到 <span style={{color: '#3578e5'}}>【双重验证】</span> 选项并点击开启。

![导航至微软账户安全设置并开启双重验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721145921598.png)
_图示：导航至微软账户安全设置并开启双重验证_

---

按照屏幕上的指示完成设置流程。成功后，双重验证状态将显示为“开启”。

![确认双重验证已成功开启](https://cos.files.maozhishi.com/data/web/web-files/img/1721145921599.png)
_图示：确认双重验证已成功开启_

### 2. 生成应用密码 {#generate-app-password}

在同一安全设置页面，找到 <span style={{color: '#3578e5'}}>【应用密码】</span> 部分，点击 <span style={{color: '#3578e5'}}>【创建新应用密码】</span>。

![在高级安全选项中找到并点击“创建新应用密码”](https://cos.files.maozhishi.com/data/web/web-files/img/1721145921614.png)
_图示：在高级安全选项中找到并点击“创建新应用密码”_

---

系统会立即生成一个应用密码。请务必当场 **<span style={{color: '#d93025'}}>复制此密码</span>** 并妥善保存，因为该密码之后将无法再次查看。

![成功生成应用密码并进行复制](https://cos.files.maozhishi.com/data/web/web-files/img/1721145921623.png)
_图示：成功生成应用密码并进行复制_

## 三、在客户端中配置 {#configure-in-client}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等客户端中添加邮箱账户时，在密码字段中输入上一步生成的 **<span style={{color: '#8e44ad'}}>应用密码</span>**，而不是您的主登录密码。

![在客户端密码框中输入微软应用密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721145921625.png)
_图示：在客户端密码框中输入微软应用密码_

---

配置成功后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示“正常”状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721145921597.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“应用密码”？**

  > - 答：“应用密码”是微软为不支持双重验证的应用或设备（包括大多数第三方邮件客户端）生成的专用密码。它是一次性的长密码，用于授权特定应用访问您的账户，而无需暴露您的主密码。

- **❓ 如果关闭双重验证会怎样？**

  > - 答：如果您关闭了双重验证，所有之前创建的应用密码将立即失效，您将无法使用它们在第三方客户端登录。

- **❓ 我可以重复使用一个应用密码吗？**
  > - 答：可以，但我们强烈建议为每一个新的应用或设备创建一个独立的 **<span style={{color: '#8e44ad'}}>应用密码</span>**。这样，如果您需要撤销某个应用的访问权限，只需删除对应的应用密码即可，而不会影响其他应用。

### 学习建议 {#learning-suggestions}

- 🎯 **安全第一**：双重验证是保护您微软账户安全的关键第一步，请务必保持开启。
- 📖 **密码管理**：由于应用密码只显示一次，请在生成后立即将其保存在安全的密码管理器中，并为其添加清晰的备注（例如“用于XX电脑的来发信”）。
- ⚙️ **定期审查**：定期访问微软账户的“高级安全选项”页面，检查和清理不再使用的应用密码。

### 相关阅读 {#related-reading}

- 📚 [谷歌邮箱 (Gmail) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 了解谷歌Gmail的 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 机制，它与微软的应用密码功能类似。
- 📚 [苹果iCloud邮箱配置指南](./113-pingguo-icloudyouxiang-apple-personal-email)
  - 对比了解 Apple iCloud 邮箱的 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** 安全机制。
- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 查看国内主流服务商腾讯邮箱的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 登录方式。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/108-weiruan-outlookyouxiang-microsoft-personal-email
