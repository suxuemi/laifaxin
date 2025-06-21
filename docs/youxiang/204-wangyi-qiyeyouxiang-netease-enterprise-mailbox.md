---
id: 204-wangyi-qiyeyouxiang-netease-enterprise-mailbox
title: "网易企业邮箱：第三方客户端登录指南"
description: "本文详细讲解如何为网易企业邮箱生成客户端授权码，并通过 IMAP/SMTP 协议在第三方客户端（如来发信）中安全收发邮件，内容同时覆盖管理员解除IP限制的步骤。"
tags: ["网易企业邮箱", "客户端授权码", "IMAP", "SMTP", "IP限制"]
keywords:
  [
    "网易企业邮箱",
    "qiye.163.com",
    "客户端授权码",
    "授权密码",
    "IMAP",
    "SMTP",
    "IP限制",
    "来发信",
  ]
---

# 网易企业邮箱：授权码登录

**<span style={{color: '#8e44ad'}}>网易企业邮箱</span>** 是一个集成了邮件、日历、云文档、即时消息等模块的协同办公平台，致力于提供信息连通与安全管理的一体化解决方案。

- **官网**: [https://qiye.163.com/](https://qiye.163.com/)

为保障账户安全，网易邮箱不允许直接使用主账户密码在第三方客户端（如 Foxmail、Thunderbird 或 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中登录。您必须先登录网页版邮箱，为特定客户端生成一个独立的 **<span style={{color: '#8e44ad'}}>“授权密码”</span>**。

:::info
登录失败通常有两个原因：一是未使用授权码，二是管理员在后台设置了IP登录限制。本文将依次解决这两个问题。
:::

## 一、IMAP/SMTP 参数配置

网易提供了多组服务器，以下是推荐配置和备用配置。

| **服务类型** | **推荐服务器**          | **备用服务器**      | **SSL 端口** |
| :----------- | :---------------------- | :------------------ | :----------- |
| IMAP (收信)  | `hwhzimap.qiye.163.com` | `imap.qiye.163.com` | 993          |
| SMTP (发信)  | `hwhzsmtp.qiye.163.com` | `smtp.qiye.163.com` | 465          |

- **说明**: 优先使用 **<span style={{color: '#8e44ad'}}>推荐服务器</span>**，其连接更稳定。如果遇到连接问题，可尝试切换至 **<span style={{color: '#8e44ad'}}>备用服务器</span>**。

## 二、管理员：解除 IP 登录限制 (可选)

如果用户在正确使用授权码后仍然登录失败，并看到 <u><span style={{color: '#e67c00'}}>ERR.LOGIN.IPDENY</span></u> 报错，说明 **企业管理员** 在后台设置了IP登录白名单。

![IP登录限制错误提示](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687094.png)
_图示：IP登录限制错误提示_

此时，需要管理员按以下步骤解除限制：

- **登录后台**: [https://qiye.163.com/admin/](https://qiye.163.com/admin/)
- **导航路径**: <span style={{color: '#3578e5'}}>【安全与审计】</span> > <span style={{color: '#3578e5'}}>【安全登录】</span> > <span style={{color: '#3578e5'}}>【登录限制】</span>。

![进入管理后台的安全登录设置](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687095.png)
_图示：进入管理后台的安全登录设置_

- **解除限制**: 在IP登录限制区域，将 <span style={{color: '#3578e5'}}>【限制登录IP】</span> 的地区选择修改为 <span style={{color: '#3578e5'}}>【所有省市】</span> 并保存。

![将IP限制地区设置为所有省市](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687096.png)
_图示：将IP限制地区设置为所有省市_

## 三、用户：获取授权密码

:::tip 绑定手机
在生成授权密码前，请确保您的网易企业邮箱账户已成功 **绑定了手机号码**。这是生成授权码的必要前提条件。
:::

- **登录网页邮箱**，点击右上角的 <span style={{color: '#3578e5'}}>【邮箱设置】</span>。

![进入邮箱设置界面](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687089.png)
_图示：进入邮箱设置界面_

- **导航路径**: 在左侧菜单中选择 <span style={{color: '#3578e5'}}>【客户端设置】</span>。
- **开启功能**: 勾选 <span style={{color: '#3578e5'}}>【设置客户端授权密码】</span>，然后点击 <span style={{color: '#3578e5'}}>【生成授权密码】</span>。

![准备生成客户端授权密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687090.png)
_图示：准备生成客户端授权密码_

- **复制密码**: 为该密码输入一个便于识别的名称（如“来发信”），系统会生成一个16位授权密码。请 **立即复制**，然后点击 <span style={{color: '#3578e5'}}>【确定】</span> 保存。
  - ⚠️ <u><span style={{color: '#d93025'}}>必须点击“确定”，否则授权密码不会生效。</span></u>

![为授权密码命名并复制](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687091.png)
_图示：为授权密码命名并复制_

- **密码管理**: 成功后，您可以在列表中看到已生成的授权密码及其到期时间。

![查看已生成的授权密码列表](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687092.png)
_图示：查看已生成的授权密码列表_

## 四、配置来发信客户端

获取 **<span style={{color: '#8e44ad'}}>“授权密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位授权密码**。

![在密码框中输入授权密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687093.png)
_图示：在密码框中输入授权密码_

- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示"正常"状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721147687088.png)
_图示：邮箱成功添加后显示【正常】状态_

## 五、拓展与资源

### 常见问题

- **❓ 为什么需要使用“授权密码”而不是邮箱密码？**

  > - 答：这是一种安全增强措施，可以避免在第三方应用中暴露您的主密码，降低密码泄露风险。您可以随时为单个应用撤销授权，而不影响主账户安全。

- **❓ 登录时提示 <u><span style={{color: '#e67c00'}}>ERR.LOGIN.DOMAINNOTEXIST</span></u> 是什么原因？**

  > - 答：这个错误通常表示您当前使用的 **<span style={{color: '#8e44ad'}}>收发信服务器</span>** 地址不稳定或无法访问。请参考本文第一节的表格，尝试更换为另一组服务器地址。

- **❓ 我可以直接使用“网易邮箱大师”吗？**
  > - 答：可以。如果您使用网易官方的 **<span style={{color: '#8e44ad'}}>“网易邮箱大师”</span>** 客户端，可以直接使用主密码登录，**无需** 生成授权密码。本指南主要适用于通用的第三方客户端，如 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)、Foxmail 或 Thunderbird。

### 学习建议

- 🔖 **清晰命名**：为每个客户端或设备生成 **独立的** <u><span style={{color: '#e67c00'}}>授权密码</span></u>，并使用清晰的用途描述进行标记，方便日后管理。
- ⏳ **关注有效期**：留意授权密码的 **<span style={{color: '#8e44ad'}}>到期时间</span>**，在密码失效前及时生成新的授权码，避免服务中断。

### 相关阅读

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  - 查看所有支持的企业邮箱服务商的配置指南，包括 <u><span style={{color: '#e67c00'}}>腾讯</span></u>、<u><span style={{color: '#e67c00'}}>阿里</span></u>、<u><span style={{color: '#e67c00'}}>谷歌</span></u> 等。
- 📚 [腾讯企业邮箱：配置指南](./205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox)
  - 学习如何为 <u><span style={{color: '#e67c00'}}>腾讯企业邮箱</span></u> 开启IMAP/SMTP服务并生成专用密码。
- 📚 [阿里企业邮箱：配置指南](./203-aliyun-qiyeyouxiang-alibaba-cloud-enterprise-mailbox)
  - 了解如何为 <u><span style={{color: '#e67c00'}}>阿里企业邮箱</span></u> 设置IMAP/SMTP的客户端专用密码。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 <u><span style={{color: '#e67c00'}}>邮箱账号</span></u>。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/204-wangyi-qiyeyouxiang-netease-enterprise-mailbox
