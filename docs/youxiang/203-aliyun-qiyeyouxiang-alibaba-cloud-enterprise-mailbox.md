---
id: 203-aliyun-qiyeyouxiang-alibaba-cloud-enterprise-mailbox
title: "阿里云企业邮箱：第三方客户端登录指南"
description: "本文详细讲解如何为阿里云企业邮箱（含外贸邮）开启 IMAP 服务、生成客户端安全密码，并通过 IMAP/SMTP 协议在第三方客户端（如来发信）中安全收发邮件。"
tags: ["阿里云企业邮箱", "外贸邮", "客户端安全密码", "IMAP", "SMTP"]
keywords:
  [
    "阿里云企业邮箱",
    "外贸邮",
    "qiye.aliyun.com",
    "mail.alibaba.com",
    "客户端安全密码",
    "IMAP",
    "SMTP",
    "来发信",
  ]
---

# 阿里云企业邮箱：客户端安全密码登录

**<span style={{color: '#8e44ad'}}>阿里云企业邮箱</span>** 是外贸从业者广泛使用的邮件服务之一。为保障账户安全，当您在第三方客户端（如 Foxmail、Thunderbird 或 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com)）中配置邮箱时，**不应直接使用主账户密码**。您必须在网页邮箱中为特定客户端生成一个独立的 **<span style={{color: '#8e44ad'}}>“客户端安全密码”</span>**。

:::info
本文内容同时适用于 **<span style={{color: '#8e44ad'}}>标准版阿里云企业邮箱</span>** 和 **<span style={{color: '#8e44ad'}}>外贸邮</span>** (国际站赠送版)。请注意区分两者在服务器地址上的细微差别。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

根据您的邮箱类型，选择对应的服务器地址进行配置。

### 1. 标准版企业邮箱 {#standard-enterprise-mailbox}

- **登录入口**: [https://qiye.aliyun.com/](https://qiye.aliyun.com/)

| **服务类型** | **服务器地址**         | **SSL 端口** |
| :----------- | :--------------------- | :----------- |
| IMAP (收信)  | `imap.qiye.aliyun.com` | 993          |
| SMTP (发信)  | `smtp.qiye.aliyun.com` | 465          |

### 2. 外贸邮 (国际站赠送版) {#foreign-trade-mailbox}

- **登录入口**: [https://mail.alibaba.com/](https://mail.alibaba.com/)

| **服务类型** | **服务器地址**     | **SSL 端口** |
| :----------- | :----------------- | :----------- |
| IMAP (收信)  | `imap.alibaba.com` | 993          |
| SMTP (发信)  | `smtp.alibaba.com` | 465          |

## 二、管理员：开启服务权限 {#admin-enable-service-permissions}

在用户可以生成客户端密码前，**企业管理员** 必须先在后台开启以下两项服务。

### 1. 开启第三方客户端登录 {#enable-third-party-login}

- **登录后台**: [https://qiye.aliyun.com/admin/](https://qiye.aliyun.com/admin/)
- **导航路径**: <span style={{color: '#3578e5'}}>【安全管理】</span> > <span style={{color: '#3578e5'}}>【账户安全策略】</span>。
- **开启权限**: 找到并启用 <span style={{color: '#3578e5'}}>【允许使用第三方客户端】</span> 选项。您可以为全体员工或指定部门/账号开启。

![管理员开启“允许使用第三方客户端”权限](https://cos.files.maozhishi.com/data/web/web-files/img/Pasted%20image%2020241017173456.png)
_图示：管理员开启“允许使用第三方客户端”权限_

### 2. 开启 IMAP/SMTP 服务 {#enable-imap-smtp-service}

- 在企业邮箱管理后台，编辑指定的用户账号。
- 找到并勾选 <span style={{color: '#3578e5'}}>【开启IMAP/SMTP服务】</span> 以保存设置。
- _注：外贸邮用户请在 [此页面](https://mail.alibaba.com/settings/setting_mail_accounts.htm) 检查并开启服务。_

![为单个邮箱账户开启 IMAP/SMTP 服务](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136105.png)
_图示：为单个邮箱账户开启 IMAP/SMTP 服务_

## 三、用户：生成客户端安全密码 {#user-generate-client-password}

管理员授权后，**邮箱用户** 登录自己的网页版邮箱，按以下步骤操作：

- **导航路径**: 在邮箱设置中，进入 <span style={{color: '#3578e5'}}>【账户与安全】</span>。
- **开启功能**: 找到 <span style={{color: '#3578e5'}}>【三方客户端安全密码】</span> 并开启该功能，然后点击 <span style={{color: '#3578e5'}}>【生成新密码】</span>。

![开启“三方客户端安全密码”功能并准备生成](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136106.png)
_图示：开启“三方客户端安全密码”功能并准备生成_

- **手机验证**: 按提示完成手机验证码校验。

![完成手机安全验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136107.png)
_图示：完成手机安全验证_

- **复制密码**: 系统会生成一个密码。请务必为它添加用途备注（如“来发信”），点击 <span style={{color: '#3578e5'}}>【确定】</span> 保存，并 **立即复制** 这段密码。

![为密码添加备注并复制](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136108.png)
_图示：为密码添加备注并复制_

- **密码管理**: 生成的密码会显示在列表中。如果某个设备不再使用，您可以在此列表中找到对应的密码并 <span style={{color: '#3578e5'}}>【删除】</span> 它，该设备的访问权限会立即失效。

![管理或删除已生成的客户端密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136109.png)
_图示：管理或删除已生成的客户端密码_

## 四、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“客户端安全密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的客户端安全密码**。

![在密码框中输入客户端安全密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136111.png)
_图示：在密码框中输入客户端安全密码_

- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示“正常”状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721147136104.png)
_图示：邮箱成功添加后显示【正常】状态_

## 五、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 标准版和外贸邮有什么主要区别？**

  > - 答：两者核心功能相似，但 **<span style={{color: '#8e44ad'}}>外贸邮</span>** 是为阿里巴巴国际站用户定制的，服务器地址 (`imap.alibaba.com`) 与标准版 (`imap.qiye.aliyun.com`) 不同。

- **❓ 为什么管理员需要先开启权限？**
  > - 答：这是企业邮箱的安全策略，确保公司对第三方应用的接入有统一的管控，防止员工随意授权应用访问公司数据。

### 学习建议 {#learning-suggestions}

- 🏷️ **清晰标记**：为您生成的每个 **<span style={{color: '#8e44ad'}}>客户端密码</span>** 设置清晰的用途备注，如“PC版来发信”、“手机Outlook”，方便日后管理和撤销。
- 🔐 **权限分离**：除非必要，建议管理员为不同部门或员工设置独立的 **<span style={{color: '#8e44ad'}}>安全策略</span>**，而不是全员开放所有权限。

### 关于阿里云企业邮箱 {#about-aliyun-enterprise-mailbox}

**<span style={{color: '#8e44ad'}}>阿里云邮箱</span>** 是一款稳定、安全、专业的办公协同工具，由阿里云自主研发。企业通过关联钉钉与邮箱帐号，能像聊天一样使用钉钉收发邮件，同时支持日历日程全终端同步，助力企业快速步入移动办公时代。

- **标准版官网**: [https://qiye.aliyun.com/](https://qiye.aliyun.com/)
- **外贸邮官网**: [https://mail.alibaba.com/](https://mail.alibaba.com/)

### 相关阅读 {#related-reading}

- 📚 [企业邮箱配置指南总览](./200-qiyeyouxiang-enterprise-mailbox)
  - 查看所有支持的企业邮箱服务商的配置指南，包括腾讯、263、谷歌等。
- 📚 [263企业邮箱配置指南](./202-263-qiyeyouxiang-263-business-mail)
  - 了解与阿里云邮箱配置流程相似的 **<span style={{color: '#8e44ad'}}>263企业邮箱</span>** 如何获取和使用授权码。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/203-aliyun-qiyeyouxiang-alibaba-cloud-enterprise-mailbox
