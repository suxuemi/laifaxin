---
id: 206-35-qiyeyouxiang-35-enterprise-mailbox
title: '35企业邮箱（三五互联企业邮箱）：第三方客户端授权码登录指南'
description: '本文详细讲解如何为 35 企业邮箱（三五互联）生成客户端授权码，并通过 IMAP/SMTP 协议在第三方客户端（如来发信）中安全收发邮件。'
tags: ['35企业邮箱', '三五互联', '客户端授权码', 'IMAP', 'SMTP']
keywords: ['35企业邮箱', '三五互联', 'mail.35.com', '客户端授权码', '授权密码', 'IMAP', 'SMTP', '来发信']
---

# 35企业邮箱：第三方客户端授权码登录

**<span style={{color: '#8e44ad'}}>35 企业邮箱</span>** (又称"三五互联企业邮箱") 是一款专注于企业沟通与协作的云邮件系统，提供无限容量和全球邮件收发服务。
- **官网**: [https://mail.35.com/](https://mail.35.com/)

为保障账户安全，35 企业邮箱要求在第三方客户端（如 Foxmail、Thunderbird 或 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中使用独立的 **<span style={{color: '#8e44ad'}}>"客户端授权码"</span>** 进行登录，而非邮箱主密码。

:::info
本文将引导您完成两项核心操作：
1.  获取 35 企业邮箱的 IMAP/SMTP 服务器地址。
2.  生成用于第三方客户端登录的专用授权码。
:::

## 一、IMAP/SMTP 参数配置

35 企业邮箱的服务器地址与其 **域名直接相关**。您需要将 `imap.` 或 `smtp.` 添加到您自己的邮箱域名前。

| **服务类型** | **服务器地址** | **SSL 端口** |
| :--- | :--- | :--- |
| IMAP (收信) | `imap.{你的域名}` | 993 |
| SMTP (发信) | `smtp.{你的域名}` | 465 |

:::tip 示例
- 如果您的域名是 `laifa.xin`，则服务器配置为 `imap.laifa.xin` 和 `smtp.laifa.xin`。
- 如果您的域名是 `laifaxin.com`，则服务器配置为 `imap.laifaxin.com` 和 `smtp.laifaxin.com`。
:::

## 二、获取授权密码

-   登录您的 **[35 企业邮箱网页版](https://mail.35.com/)**。
-   **导航路径**: 点击右上角的 <span style={{color: '#3578e5'}}>【设置】</span> > <span style={{color: '#3578e5'}}>【客户端协议设置】</span>。
-   **新增授权码**: 在 <span style={{color: '#3578e5'}}>"第三方客户端授权码"</span> 区域，点击 <span style={{color: '#3578e5'}}>【新增授权码】</span>。
-   **复制密码**: 为该密码输入一个便于识别的名称（如"来发信"），**立即复制** 生成的授权码。

![新增客户端授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721146357519.jpg)
_图示：新增客户端授权码_

## 三、配置来发信客户端

获取 **<span style={{color: '#8e44ad'}}>"客户端授权码"</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

1.  **导航至邮箱账号**: 在 <span style={{color: '#3578e5'}}>【设置】</span> 中找到并点击 <span style={{color: '#3578e5'}}>【邮箱账号】</span>。
2.  **新建服务器配置**: 点击 <span style={{color: '#3578e5'}}>【新建】</span>，然后选择 <span style={{color: '#3578e5'}}>【服务器配置】</span>。
3.  **填写服务器参数**: 根据本文第一节的指导，正确填写您的 <span style={{color: '#3578e5'}}>IMAP</span> 和 <span style={{color: '#3578e5'}}>SMTP</span> 服务器信息。
4.  **填写验证信息**: 输入您的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，并在 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的授权码**，点击 <span style={{color: '#3578e5'}}>【验证】</span>。

![在密码框中输入授权码并填写服务器信息](https://cos.files.maozhishi.com/data/web/web-files/img/1721146357532.png)
_图示：在密码框中输入授权码并填写服务器信息_

-   系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示"正常"状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721146357518.png)
_图示：邮箱成功添加后显示"正常"状态_

## 四、拓展与资源

### 常见问题

- **❓ 为什么收发信服务器地址需要使用我自己的域名？**
> - 答：这是 35 企业邮箱的服务模式，旨在为每个企业客户提供更具品牌独立性的邮箱服务。将服务器地址与您的域名绑定，有助于提升品牌形象和邮件投递的信任度。

- **❓ 我可以在多个客户端上使用同一个授权码吗？**
> - 答：可以，但不推荐。为了安全起见，最佳实践是为每一个您使用的客户端或设备都生成一个 **独立的** <u><span style={{color: '#e67c00'}}>授权码</span></u>。这样，如果某个设备丢失或某个客户端不再使用，您可以单独撤销其授权，而不影响其他设备。

### 学习建议

-   🔑 **安全管理**：定期审查您生成的授权码列表。对于不再使用的客户端或设备，应及时 **删除** 其对应的授权码，以防范潜在的安全风险。
-   🌐 **域名解析**：确保您的 **<span style={{color: '#8e44ad'}}>域名解析</span>** (尤其是 MX 记录) 配置正确，这是保障邮件服务正常运行的基础。如有疑问，请联系您的域名提供商或 IT 管理员。

### 相关阅读

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  -   查看所有支持的企业邮箱服务商的配置指南，包括 <u><span style={{color: '#e67c00'}}>腾讯</span></u>、<u><span style={{color: '#e67c00'}}>阿里</span></u>、<u><span style={{color: '#e67c00'}}>网易</span></u> 等。
- 📚 [腾讯企业邮箱：配置指南](./205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox)
  -   学习如何为 <u><span style={{color: '#e67c00'}}>腾讯企业邮箱</span></u> 开启IMAP/SMTP服务并生成专用密码。
- 📚 [邮箱账号管理](../zhinan/email-account)
    - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 <u><span style={{color: '#e67c00'}}>邮箱账号</span></u>。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/206-35-qiyeyouxiang-35-enterprise-mailbox

