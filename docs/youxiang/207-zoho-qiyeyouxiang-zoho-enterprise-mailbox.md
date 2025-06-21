---
id: 207-zoho-qiyeyouxiang-zoho-enterprise-mailbox
title: "Zoho企业邮箱：第三方客户端授权码登录指南"
description: "本文详细讲解如何为 Zoho Mail 开启 IMAP 访问并生成应用专用密码，以便在第三方客户端（如来发信）中安全地收发邮件。"
tags: ["Zoho Mail", "应用密码", "IMAP", "SMTP"]
keywords:
  [
    "Zoho Mail",
    "Zoho",
    "zoho.com",
    "应用密码",
    "专用密码",
    "IMAP",
    "SMTP",
    "来发信",
  ]
---

# Zoho企业邮箱：应用密码登录

**<span style={{color: '#8e44ad'}}>Zoho Mail</span>** 是一款功能强大且注重隐私的电子邮件服务，广泛应用于个人和企业用户。它提供了安全、无广告的邮箱体验，并支持通过 IMAP 和 SMTP 协议在各种邮件客户端和第三方应用中进行邮件收发。为保障账户安全，当您需要在第三方客户端（如 Foxmail、Thunderbird 或 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中使用时，必须为其生成专用的 **<span style={{color: '#8e44ad'}}>“应用密码”</span>**。

- **官网**: [https://www.zoho.com/mail/](https://www.zoho.com/mail/)

:::info
在第三方客户端登录 Zoho Mail 通常需要两步：

1.  **开启 IMAP 访问**：在 Zoho Mail 设置中，授权外部应用通过 IMAP 协议访问您的邮箱。
2.  **生成应用密码**：在 Zoho 账户安全设置中，为您要登录的客户端生成一个唯一的密码。
    :::

## 一、IMAP/SMTP 参数配置

| **服务类型** | **服务器地址**  | **SSL 端口** |
| :----------- | :-------------- | :----------- |
| IMAP (收信)  | `imap.zoho.com` | 993          |
| SMTP (发信)  | `smtp.zoho.com` | 465          |

## 二、开启 IMAP 访问

- 登录您的 **[Zoho Mail 网页版](https://mail.zoho.com/)**。
- **导航路径**: 点击右上角的 <span style={{color: '#3578e5'}}>【设置】</span> (齿轮图标) > <span style={{color: '#3578e5'}}>【Mail Accounts】</span>。
- **开启访问**: 找到您要配置的邮箱账户，勾选 <span style={{color: '#3578e5'}}>【IMAP Access】</span>，并点击 <span style={{color: '#3578e5'}}>【Save】</span>。

![开启 Zoho Mail 的 IMAP 访问权限](https://cos.files.maozhishi.com/data/web/web-files/img/20250507170348.png)
_图示：开启 Zoho Mail 的 IMAP 访问权限_

## 三、生成应用密码

- **进入安全设置**: 登录您的 [Zoho 账户中心](https://accounts.zoho.com/)，然后导航至 <span style={{color: '#3578e5'}}>【Security】</span> > <span style={{color: '#3578e5'}}>【App passwords】</span>。
- **生成新密码**: 点击 <span style={{color: '#3578e5'}}>【Generate New Password】</span>。

![导航至应用密码生成页面](https://cos.files.maozhishi.com/data/web/web-files/img/20250507171801.png)
_图示：导航至应用密码生成页面_

- **命名并生成**: 输入一个便于识别的名称（如“来发信”），然后点击 <span style={{color: '#3578e5'}}>【Generate】</span>。

![为新密码命名](https://cos.files.maozhishi.com/data/web/web-files/img/20250507172709.png)
_图示：为新密码命名_

- **复制密码**: 系统会生成一个16位密码。
  - ⚠️ <u><span style={{color: '#d93025'}}>请立即复制并妥善保管此密码，该密码仅显示一次。</span></u>

![复制生成的应用专用密码](https://cos.files.maozhishi.com/data/web/web-files/img/20250507172844.png)
_图示：复制生成的应用专用密码_

## 四、配置来发信客户端

获取 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位应用密码**。

![在密码框中输入应用密码](https://cos.files.maozhishi.com/data/web/web-files/img/20250507172943.png)
_图示：在密码框中输入应用密码_

## 五、拓展与资源

### 常见问题

- **❓ 为什么需要使用“应用密码”而不是账户主密码？**

  > - 答：这是一种安全增强措施。应用密码为每个应用提供唯一的登录凭证，即使某个应用的密码泄露，您的主账户依然安全。您也可以随时撤销对单个应用的访问权限，而不影响其他应用。

- **❓ 生成应用密码时提示“您的账户不能使用这个功能”是什么原因？**
  > - 答：这通常是因为您使用的 Zoho Mail 免费版套餐不支持通过 IMAP/SMTP 进行外部访问。您需要升级到付费套餐才能使用此功能。

![免费账户无法使用此功能](https://cos.files.maozhishi.com/data/web/web-files/img/9282d6092c9d0fc09214b5bd263c36a4.png)
_图示：免费账户无法使用此功能_

### 学习建议

- 🔖 **清晰命名**：为每个客户端或设备生成 **独立的** <u><span style={{color: '#e67c00'}}>应用密码</span></u>，并使用清晰的用途描述进行标记（如“我的iPhone”、“公司电脑的Thunderbird”），方便日后管理。
- 🔑 **安全保管**：应用密码仅在生成时显示一次，请务必将其 **立即复制** 并安全地保存在密码管理器等工具中。

### 相关阅读

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  - 查看所有支持的企业邮箱服务商的配置指南，包括 <u><span style={{color: '#e67c00'}}>腾讯</span></u>、<u><span style={{color: '#e67c00'}}>阿里</span></u>、<u><span style={{color: '#e67c00'}}>网易</span></u> 等。
- 📚 [35企业邮箱：配置指南](./206-35-qiyeyouxiang-35-enterprise-mailbox)
  - 了解如何为 <u><span style={{color: '#e67c00'}}>35企业邮箱</span></u> 设置IMAP/SMTP的客户端授权码。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 <u><span style={{color: '#e67c00'}}>邮箱账号</span></u>。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/207-zoho-qiyeyouxiang-zoho-enterprise-mailbox
