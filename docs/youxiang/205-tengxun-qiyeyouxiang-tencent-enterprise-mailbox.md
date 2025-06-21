---
id: 205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox
title: "腾讯企业邮箱：第三方客户端登录指南"
description: "本文详细讲解如何为腾讯企业邮箱生成客户端专用密码，并通过 IMAP/SMTP 协议在第三方客户端（如来发信）中安全收发邮件，内容同时覆盖管理员开启安全访问的步骤。"
tags: ["腾讯企业邮箱", "客户端专用密码", "IMAP", "SMTP", "安全登录", "企业微信"]
keywords:
  [
    "腾讯企业邮箱",
    "exmail.qq.com",
    "客户端专用密码",
    "授权密码",
    "IMAP",
    "SMTP",
    "来发信",
    "企业微信",
  ]
---

# 腾讯企业邮箱：客户端专用密码登录

**<span style={{color: '#8e44ad'}}>腾讯企业邮箱</span>** 是集成在企业微信生态中的邮件服务，它为企业提供了稳定、安全的邮件收发与管理解决方案。

- **官网**: [https://exmail.qq.com/](https://exmail.qq.com/)

出于安全考虑，腾讯限制了直接使用账户密码在第三方客户端（如 Foxmail、Thunderbird 或 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中登录。

您必须先由管理员开启相关权限，然后由用户在网页版邮箱中生成一个独立的 **<span style={{color: '#8e44ad'}}>“客户端专用密码”</span>**，才能完成绑定。

:::info
在第三方客户端登录腾讯企业邮箱通常需要两步：

1.  **管理员操作**：在企业微信后台，为成员开启 IMAP/SMTP 访问权限。
2.  **用户操作**：在网页版邮箱中，开启安全登录并生成专用的客户端密码。
    :::

## 一、IMAP/SMTP 参数配置

| **服务类型** | **推荐服务器**       | **备用服务器 (海外)**  | **SSL 端口** |
| :----------- | :------------------- | :--------------------- | :----------- |
| IMAP (收信)  | `imap.exmail.qq.com` | `hwimap.exmail.qq.com` | 993          |
| SMTP (发信)  | `smtp.exmail.qq.com` | `hwsmtp.exmail.qq.com` | 465          |

## 二、管理员：开启客户端访问权限

:::warning 前提条件
此步骤 **必须由企业管理员** 操作。如果您不是管理员，请将此部分内容或文档链接发送给您的管理员进行处理。
:::

- **登录后台**: 管理员使用企业微信扫码登录 [企业微信管理后台](https://work.weixin.qq.com/wework_admin/frame#/apps/qykit/proxy/exmail)。
- **导航路径**: <span style={{color: '#3578e5'}}>【协作】</span> > <span style={{color: '#3578e5'}}>【安全管理】</span> > <span style={{color: '#3578e5'}}>【客户端访问限制】</span>。

![在后台进入客户端访问限制](https://cos.files.maozhishi.com/data/web/web-files/img/20250425144510.png)
_图示：在后台进入客户端访问限制_

- **修改范围**: 点击 <span style={{color: '#3578e5'}}>【修改Exchange/IMAP/SMTP服务范围】</span>。

![修改服务范围](https://cos.files.maozhishi.com/data/web/web-files/img/20250425144654.png)
_图示：修改服务范围_

- **选择成员**: 勾选需要授权的成员，点击 <span style={{color: '#3578e5'}}>【确定】</span>。
  - ⚠️ <u><span style={{color: '#d93025'}}>请确保管理员已将您的账号加入到许可范围中。</span></u>

![选择需要授权的成员](https://cos.files.maozhishi.com/data/web/web-files/img/20250425144958.png)
_图示：选择需要授权的成员_

## 三、用户：生成客户端专用密码

完成管理员授权后，个人用户需登录网页版邮箱，按以下步骤生成专用密码。

### 1. 开启 IMAP/SMTP 服务

- **登录网页邮箱**: [点击此处登录腾讯企业邮箱](https://exmail.qq.com/login) (建议使用企业微信扫码)。
- **导航路径**: <span style={{color: '#3578e5'}}>【设置】</span> > <span style={{color: '#3578e5'}}>【收发信设置】</span>。
- **开启服务**: 勾选 <span style={{color: '#3578e5'}}>【开启IMAP/SMTP服务】</span> 并保存更改。

![开启IMAP/SMTP服务](https://cos.files.maozhishi.com/data/web/web-files/img/20250425151648.png)
_图示：开启IMAP/SMTP服务_

### 2. 生成专用密码

- **导航路径**: <span style={{color: '#3578e5'}}>【设置】</span> > <span style={{color: '#3578e5'}}>【邮箱绑定】</span>。
- **开启安全登录**: 点击 <span style={{color: '#3578e5'}}>【开启安全登录】</span>，并在弹窗中确认。

![开启安全登录](https://cos.files.maozhishi.com/data/web/web-files/img/20250425152148.png)
_图示：开启安全登录_

![在弹窗中确认开启](https://cos.files.maozhishi.com/data/web/web-files/img/20250425152220.png)
_图示：在弹窗中确认开启_

![安全登录开启成功提示](https://cos.files.maozhishi.com/data/web/web-files/img/20250425152230.png)
_图示：安全登录开启成功提示_

- **生成密码**: 在 <span style={{color: '#3578e5'}}>“客户端专用密码”</span> 区域，点击 <span style={{color: '#3578e5'}}>【生成新密码】</span>。

![生成新的客户端专用密码](https://cos.files.maozhishi.com/data/web/web-files/img/20250425152457.png)
_图示：生成新的客户端专用密码_

- **复制密码**: 为该密码输入一个便于识别的名称（如“来发信”），**立即复制** 生成的16位专用密码，然后点击 <span style={{color: '#3578e5'}}>【确定】</span> 保存。

![为专用密码命名并复制](https://cos.files.maozhishi.com/data/web/web-files/img/20250425152625.png)
_图示：为专用密码命名并复制_

## 四、配置来发信客户端

获取 **<span style={{color: '#8e44ad'}}>“客户端专用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位专用密码**。

![在密码框中输入专用密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721147883445.png)
_图示：在密码框中输入专用密码_

- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示"正常"状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721147883439.png)
_图示：邮箱成功添加后显示【正常】状态_

## 五、拓展与资源

### 常见问题

- **❓ 为什么需要使用“客户端专用密码”而不是邮箱密码？**

  > - 答：这是一种安全增强措施，旨在保护您的主账户密码不被泄露。通过为不同客户端设置独立的专用密码，您可以随时撤销对某个应用的访问授权，而不影响账户的整体安全。

- **❓ 我是管理员，也为自己开启了权限，但登录还是失败，是什么原因？**
  > - 答：请检查是否完成了用户端的 **所有操作**。除了管理员授权外，您还需要以用户身份登录网页邮箱，确保已开启 <u><span style={{color: '#e67c00'}}>IMAP/SMTP服务</span></u> 和 <u><span style={{color: '#e67c00'}}>安全登录</span></u>，并使用了新生成的专用密码。

### 学习建议

- 🔖 **清晰命名**：为每个客户端或设备生成 **独立的** <u><span style={{color: '#e67c00'}}>专用密码</span></u>，并使用清晰的用途描述进行标记，方便日后管理和撤销。
- 🔐 **权限最小化**：管理员在授权时，应遵循 **<span style={{color: '#8e44ad'}}>最小权限原则</span>**，仅为确实需要使用第三方客户端的成员开启访问权限。

### 相关阅读

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  - 查看所有支持的企业邮箱服务商的配置指南，包括 <u><span style={{color: '#e67c00'}}>网易</span></u>、<u><span style={{color: '#e67c00'}}>阿里</span></u>、<u><span style={{color: '#e67c00'}}>谷歌</span></u> 等。
- 📚 [网易企业邮箱：配置指南](./204-wangyi-qiyeyouxiang-netease-enterprise-mailbox)
  - 学习如何为 <u><span style={{color: '#e67c00'}}>网易企业邮箱</span></u> 开启IMAP/SMTP服务并生成授权密码。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 <u><span style={{color: '#e67c00'}}>邮箱账号</span></u>。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox
