---
id: 105-souhu-sohuyouxiang-sohu-personal-email
title: '搜狐邮箱 (@sohu.com): IMAP/SMTP 与独立密码配置指南'
description: 本文指导如何在第三方邮件客户端（如来发信）中设置搜狐邮箱（@sohu.com）。内容涵盖IMAP/SMTP服务器参数、如何在网页版邮箱中开启IMAP/SMTP服务并获取用于第三方登录的“独立密码”的详细步骤，以及IP白名单模式的说明。
tags: ['搜狐邮箱', 'sohu邮箱', 'IMAP', 'SMTP', '独立密码', '邮箱配置']
keywords:
  [
    '搜狐邮箱',
    'sohu.com',
    'sohuVIP邮箱',
    'IMAP',
    'SMTP',
    '独立密码',
    '授权码',
    'IP白名单',
    '客户端配置',
  ]
---

# 搜狐邮箱 (@sohu.com): IMAP/SMTP 与独立密码配置指南

搜狐邮箱 (@sohu.com) 是一项历史悠久的邮件服务。与可直接使用登录密码的邮箱不同，搜狐邮箱要求用户在绑定第三方客户端前，必须先在网页版开启 `IMAP/SMTP` 服务，并生成一个专用的 **<span style={{color: '#8e44ad'}}>“独立密码”</span>**。本指南将详细演示该过程。

:::tip
为保障账户安全，搜狐邮箱强制使用 **<span style={{color: '#8e44ad'}}>“独立密码”</span>**（即授权码）登录第三方客户端，而非您的主登录密码。
:::

## 一、核心参数配置 {#core-parameters-configuration}

|                      **服务类型**                      | **服务器地址**  | **SSL端口** |
| :----------------------------------------------------: | :-------------: | :---------: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `imap.sohu.com` |    `993`    |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> | `smtp.sohu.com` |    `465`    |

:::info
搜狐的付费邮箱 (@vip.sohu.com) 也使用相同的服务器地址。
:::

## 二、获取独立密码 {#get-independent-password}

### 1. 访问邮箱设置 {#access-settings}

首先，登录您的 📚[搜狐邮箱官网](https://mail.sohu.com/)。登录后，点击页面顶部的 <span style={{color: '#3578e5'}}>【选项】</span> 按钮，在下拉菜单中选择 <span style={{color: '#3578e5'}}>【设置】</span>。

### 2. 启用 IMAP/SMTP 服务 {#enable-imap-smtp}

在设置页面中，点击 <span style={{color: '#3578e5'}}>【POP3/SMTP/IMAP】</span> 标签页。

![导航至搜狐邮箱的IMAP/SMTP服务设置页面](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399710.png)
_图示：导航至搜狐邮箱的IMAP/SMTP服务设置页面_

---

然后，勾选 <span style={{color: '#3578e5'}}>【IMAP/SMTP服务】</span> 选项以启用该功能。

![勾选以启用IMAP/SMTP服务](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399711.png)
_图示：勾选以启用IMAP/SMTP服务_

### 3. 生成独立密码 {#generate-password}

启用服务后，系统会弹出一个验证窗口。点击 <span style={{color: '#3578e5'}}>【获取验证码】</span>，输入您收到的手机验证码，然后点击“确定”。

![通过手机验证码来授权生成独立密码](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399712.png)
_图示：通过手机验证码来授权生成独立密码_

---

验证成功后，系统将生成并显示您的独立密码。请立即复制并妥善保管此密码。

![成功获取用于第三方客户端登录的独立密码](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399713.png)
_图示：成功获取用于第三方客户端登录的独立密码_

## 三、在客户端中配置 {#configure-in-client}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等客户端中添加搜狐邮箱时，请在密码字段中输入上一步生成的 **<span style={{color: '#8e44ad'}}>“独立密码”</span>**，而不是您的邮箱登录密码。

![在客户端的密码框中填入获取的“独立密码”](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399716.png)
_图示：在客户端的密码框中填入获取的“独立密码”_

## 四、高级设置：IP 白名单 {#advanced-settings-ip-whitelist}

:::warning
对于大多数用户，建议 **关闭“IP白名单模式”**，以避免因IP地址变动导致无法收发邮件。关闭后，仅使用独立密码即可验证。
:::

![为简化配置，建议关闭IP白名单功能](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399714.png)
_图示：为简化配置，建议关闭IP白名单功能_

若您了解其工作原理并需要增强安全性，可以启用此功能并添加允许访问您邮箱的特定IP地址或IP段。

![为高级用户展示如何配置IP白名单](https://cos.files.maozhishi.com/public/attachments/xsj/1641804399715.png)
_图示：为高级用户展示如何配置IP白名单_

## 五、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 搜狐免费邮箱 (@sohu.com) 和 VIP 邮箱 (@vip.sohu.com) 有什么区别？**

  > - 答：VIP 邮箱是搜狐提供的付费增值服务，通常提供更大的存储空间、更强的反垃圾能力和专属客服支持。但两者的 IMAP/SMTP 配置流程是相同的。

- **❓ 什么是“独立密码”？为什么不能用登录密码？**

  > - 答：“独立密码”是搜狐为第三方客户端生成的专用密码，也常被称为 **<span style={{color: '#8e44ad'}}>“授权码”</span>**。这种机制可以保护您的主登录密码不被泄露，即使客户端被攻破，您也可以随时在网页端禁用该独立密码，而无需更改主密码，从而增强了账户安全性。

- **❓ 我应该开启“IP白名单模式”吗？**
  > - 答：除非您拥有固定的公网IP地址，并且非常清楚其安全含义，否则强烈建议 **关闭** 此功能。对于使用动态IP（如家庭宽带、移动网络）的用户，开启白名单会导致您频繁无法连接邮箱。

### 学习建议 {#learning-suggestions}

- 🎯 **妥善保管**：独立密码只显示一次，请务必在生成后立即将其复制并安全地保存在您的密码管理工具中。
- 📖 **定期审查**：您可以随时登录网页版邮箱，重新生成或删除不再使用的独立密码，以管理所有已授权的设备或应用。
- ⚙️ **专注安全**：优先使用“独立密码”机制，这是现代邮箱服务保护账户安全的主流方式。

### 相关阅读 {#related-reading}

- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 学习同样使用 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 的腾讯邮箱是如何进行配置的。
- 📚 [网易邮箱 (@163.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 查看国内另一主流邮箱服务商—— **<span style={{color: '#8e44ad'}}>网易邮箱</span>** 的授权码获取流程。
- 📚 [谷歌邮箱 (Gmail) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 了解谷歌Gmail的 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 机制，它与独立密码功能类似。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/105-souhu-sohuyouxiang-sohu-personal-email

```

```
