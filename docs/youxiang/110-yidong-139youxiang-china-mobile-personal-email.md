---
id: 110-yidong-139youxiang-china-mobile-personal-email
title: "移动139邮箱 (@139.com): 客户端密码配置指南"
description: "本文详细讲解如何在第三方客户端（如来发信）绑定中国移动139邮箱（@139.com），内容覆盖开启IMAP/SMTP服务、设置并获取“客户端密码”的完整步骤。"
tags: ["移动139邮箱", "139邮箱", "China Mobile", "IMAP", "SMTP", "客户端密码"]
keywords:
  [
    "移动139邮箱",
    "139.com",
    "中国移动",
    "IMAP",
    "SMTP",
    "POP3",
    "客户端密码",
    "授权码",
    "邮箱配置",
  ]
---

# 移动139邮箱 (@139.com): 客户端密码配置指南

中国移动139邮箱 (@139.com) 为保障账户安全，要求在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方客户端登录时，使用专门的 **<span style={{color: '#8e44ad'}}>“客户端密码”</span>**，而非您的主账户密码。本指南将引导您完成服务启用及客户端密码的获取与配置全过程。

:::tip
139邮箱是中国移动旗下的邮件服务，通常以您的手机号码作为邮箱地址（`手机号@139.com`），方便记忆。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 或其他客户端中手动配置139邮箱时，请使用以下服务器参数：

| **服务类型** | **服务器地址** | **SSL 端口** |
| :----------- | :------------- | :----------- |
| IMAP (收信)  | `imap.139.com` | 993          |
| SMTP (发信)  | `smtp.139.com` | 465          |

## 二、获取客户端密码 {#get-client-password}

在第三方客户端上成功绑定139邮箱，必须完成以下两个关键步骤。

### 1. 开启邮箱协议 {#enable-email-protocol}

首先，您需要登录网页版139邮箱，确保IMAP/SMTP服务处于开启状态。

- 登录139邮箱官网：[https://mail.139.com/](https://mail.139.com/)
- 导航至页面顶部的 <span style={{color: '#3578e5'}}>【设置】</span>，在左侧菜单中选择 <span style={{color: '#3578e5'}}>【账户与安全】</span>。
- 找到并点击 <span style={{color: '#3578e5'}}>【邮箱协议设置】</span>，然后确保 **<span style={{color: '#3578e5'}}>“IMAP/SMTP服务”</span>** 处于已开启状态。

![在139邮箱后台开启IMAP/SMTP服务](https://cos.files.maozhishi.com/data/web/web-files/img/1721144101130.png)
_图示：确保IMAP/SMTP服务已开启_

### 2. 设置并获取客户端密码 {#set-get-client-password}

接下来，在同一 <span style={{color: '#3578e5'}}>【账户与安全】</span> 页面下，设置用于第三方客户端登录的专用密码。

- 在 <span style={{color: '#3578e5'}}>【账户与安全】</span> 设置中，找到并点击 <span style={{color: '#3578e5'}}>【客户端密码】</span> 选项。
- 按照页面提示，**设置一个新的客户端密码**。您可能需要通过短信验证码等方式进行安全验证。
- <u><span style={{color: '#d93025'}}>请注意</span></u>，139邮箱是让您 **“设置”** 一个密码，而不是像其他邮箱那样“生成”一个随机密码。
- 设置成功后，请妥善保管这个密码，它将是您在第三方客户端中登录的唯一凭证。

## 三、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“客户端密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中输入您刚刚 **设置的“客户端密码”**，而不是您的邮箱登录密码。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用客户端密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1721144101129.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“客户端密码”？它和我的邮箱登录密码有什么区别？**

  > - 答：“客户端密码”是专为第三方邮件客户端（如来发信、Foxmail等）设计的独立密码，用于授权这些应用访问您的139邮箱。它与您登录网页版邮箱时使用的主密码不同，这是一种增强账户安全性的措施。

- **❓ 如果我忘记了客户端密码怎么办？**
  > - 答：您可以随时登录139邮箱网页版，进入 <span style={{color: '#3578e5'}}>【设置】</span> > <span style={{color: '#3578e5'}}>【账户与安全】</span> > <span style={{color: '#3578e5'}}>【客户端密码】</span> 页面，按照流程重新设置一个新的客户端密码。

### 学习建议 {#learning-suggestions}

- 🔐 **密码隔离**：为不同的第三方客户端设置不同的 <u><span style={{color: '#e67c00'}}>客户端密码</span></u> 是一种良好的安全习惯，便于管理和撤销授权。
- 📝 **安全记录**：将设置好的 <u><span style={{color: '#e67c00'}}>客户端密码</span></u> 安全地记录在密码管理器中，并清晰标注其用途（例如：“139邮箱用于来发信”）。
- 🔄 **同步检查**：如果在客户端中收发邮件遇到密码错误提示，请首先检查网页版邮箱的 <span style={{color: '#3578e5'}}>“IMAP/SMTP服务”</span> 是否仍处于开启状态，并确认您的客户端密码是否正确。

### 相关阅读 {#related-reading}

- 📚 [电信189邮箱 (@189.cn) 配置指南](./104-dianxin-189youxiang-telecom-personal-mailbox)
  - 对比了解中国电信189邮箱的 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 获取方式。
- 📚 [新浪邮箱 (@sina.com) 配置指南](./109-xinlang-sinayouxiang-sina-personal-email)
  - 了解新浪邮箱获取 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 的流程。
- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 参考腾讯邮箱的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 登录机制，其原理与客户端密码类似。
- 📚 [网易邮箱 (@163.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 查看网易邮箱体系中类似的 **<span style={{color: '#8e44ad'}}>“客户端授权密码”</span>** 设置。
- 📚 [搜狐邮箱 (@sohu.com) 配置指南](./105-souhu-sohuyouxiang-sohu-personal-email)
  - 参考搜狐邮箱 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 的获取方法，其机制与客户端密码相似。
- 📚 [苹果iCloud邮箱配置指南](./113-pingguo-icloudyouxiang-apple-personal-email)
  - 学习如何为 Apple iCloud 邮箱生成并使用 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>**。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/110-yidong-139youxiang-china-mobile-personal-email
