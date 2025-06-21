---
id: 107-wangyi-163youxiang-netease-personal-email
title: "网易邮箱 (@163.com): IMAP/SMTP 与授权码配置"
description: 本文详细讲解如何在第三方邮件客户端（如来发信）中设置网易个人邮箱（@163.com, @126.com, @yeah.net），并指导您一步步开启IMAP/SMTP服务、通过安全验证生成并使用“客户端授权码”完成登录。
tags:
  [
    "网易邮箱",
    "163邮箱",
    "126邮箱",
    "yeah.net",
    "IMAP",
    "SMTP",
    "授权码",
    "邮箱配置",
  ]
keywords:
  [
    "网易邮箱",
    "163.com",
    "126.com",
    "yeah.net",
    "IMAP",
    "SMTP",
    "授权码",
    "客户端授权码",
    "POP3",
    "客户端配置",
  ]
---

# 网易邮箱 (@163.com): IMAP/SMTP 与授权码配置

网易邮箱（包括 @163.com, @126.com, @yeah.net 等后缀）是中国主流的电子邮件服务商。为保障账户安全，网易邮箱要求在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端中，必须使用专门生成的 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 进行登录，而非邮箱的原始登录密码。

:::tip
本指南的核心是获取 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>**。这是一个与主登录密码不同的、专用于第三方应用的16位密码。
:::

## 一、核心参数配置 {#core-parameters-configuration}

网易旗下所有个人免费邮箱（@163.com, @126.com, @yeah.net）均可使用以下通用服务器地址进行配置。

|                      **服务类型**                      | **服务器地址** | **SSL端口** |
| :----------------------------------------------------: | :------------: | :---------: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `imap.163.com` |    `993`    |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> | `smtp.163.com` |    `465`    |

:::info
尽管各邮箱后缀（如 @126.com）有其专属服务器地址（如 `imap.126.com`），但使用上述 `@163.com` 的服务器地址通常具有最佳的兼容性。
:::

## 二、获取客户端授权码 {#get-client-authorization-code}

授权码的获取和管理均需在网易邮箱的网页版完成。

### 1. 访问邮箱设置 {#access-settings}

登录 📚[网易邮箱官网](https://mail.163.com)，点击顶部的 <span style={{color: '#3578e5'}}>【设置】</span>，然后从左侧菜单中选择 <span style={{color: '#3578e5'}}>【POP3/SMTP/IMAP】</span>。

![导航至网易邮箱的POP3/SMTP/IMAP设置页面](https://cos.files.maozhishi.com/data/web/web-files/img/1721143815840.png)
_图示：导航至网易邮箱的POP3/SMTP/IMAP设置页面_

### 2. 开启服务并获取授权码 {#enable-service-and-get-code}

在设置页面，首先确保 <span style={{color: '#3578e5'}}>【IMAP/SMTP服务】</span> 和 <span style={{color: '#3578e5'}}>【POP3/SMTP服务】</span> 的开关已开启。然后，点击“客户端授权密码”旁边的 <span style={{color: '#3578e5'}}>【开启】</span> 按钮。

![开启IMAP/SMTP服务并准备获取授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721143815842.png)
_图示：开启IMAP/SMTP服务并准备获取授权码_

---

系统会要求进行安全验证。通常需要使用绑定的手机发送短信。按提示操作完成验证。

![根据页面提示发送短信以完成安全验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721143815839.png)
_图示：根据页面提示发送短信以完成安全验证_

---

验证成功后，系统会生成一个授权码。请立即 **<span style={{color: '#d93025'}}>复制并妥善保管</span>** 此授权码，因为它只会出现一次。

![成功生成客户端授权码并复制](https://cos.files.maozhishi.com/data/web/web-files/img/1721143815841.png)
_图示：成功生成客户端授权码并复制_

## 三、在客户端中配置 {#configure-in-client}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加邮箱时，在密码字段中粘贴刚刚复制的 **<span style={{color: '#8e44ad'}}>客户端授权码</span>**。

![在第三方客户端的密码栏中输入获取的客户端授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721143815848.png)
_图示：在第三方客户端的密码栏中输入获取的客户端授权码_

---

配置成功后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示“正常”状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721143815837.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“客户端授权码”？**

  > - 答：“客户端授权码”是网易邮箱为第三方客户端生成的专用密码，它不同于您的邮箱登录密码。这一机制旨在保护您的主密码安全。

- **❓ 我可以管理已生成的授权码吗？**

  > - 答：可以。您可以随时在网页邮箱的设置页面中查看已授权的设备、禁用不再使用的授权码或生成新的授权码。建议为每个客户端使用独立的授权码。

- **❓ @163.com, @126.com, @yeah.net 的配置流程一样吗？**
  > - 答：是的，完全一样。它们都属于网易旗下的个人邮箱服务，共享同一套安全策略和配置流程。

### 学习建议 {#learning-suggestions}

- 🎯 **安全为先**：始终使用授权码登录第三方客户端，切勿直接输入您的主登录密码。
- 📖 **定期管理**：定期登录网页版邮箱，检查授权码列表，移除不再使用的设备授权，确保账户安全。
- ⚙️ **密码保管**：授权码只在生成时显示一次，请务必立即复制并将其保存在安全的密码管理器中。

### 相关阅读 {#related-reading}

- 📚 [网易企业邮配置指南](./204-wangyi-qiyeyouxiang-netease-enterprise-mailbox)
  - 如果您使用的是网易企业邮箱，请查阅此 **<span style={{color: '#8e44ad'}}>专属配置指南</span>**。
- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 了解 **<span style={{color: '#8e44ad'}}>腾讯邮箱</span>** 获取授权码的流程，它与网易邮箱的机制相似。
- 📚 [搜狐邮箱 (@sohu.com) 配置指南](./105-souhu-sohuyouxiang-sohu-personal-email)
  - 查看 **<span style={{color: '#8e44ad'}}>搜狐邮箱</span>** 是如何生成其“独立密码”（即授权码）的。
- 📚 [苹果iCloud邮箱配置指南](./113-pingguo-icloudyouxiang-apple-personal-email)
  - 对比了解 Apple iCloud 邮箱的 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** 安全机制。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/107-wangyi-163youxiang-netease-personal-email
