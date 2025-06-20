---
id: 106-tengxun-qqyouxiang-tencent-personal-email
title: '腾讯邮箱 (@qq.com): IMAP/SMTP 与授权码配置'
description: 本文详细讲解如何在第三方邮件客户端（如来发信）中设置腾讯个人邮箱（@qq.com, @foxmail.com），并指导您一步步开启IMAP/SMTP服务、通过安全验证生成并使用“授权码”完成登录。
tags: ['腾讯邮箱', 'QQ邮箱', 'Foxmail', 'IMAP', 'SMTP', '授权码', '邮箱配置']
keywords: ['腾讯邮箱', 'QQ邮箱', 'foxmail.com', 'IMAP', 'SMTP', '授权码', 'POP3', '客户端配置', '安全设置']
---

# 腾讯邮箱 (@qq.com): IMAP/SMTP 与授权码配置

腾讯邮箱（包括 @qq.com 和 @foxmail.com 后缀）是中国最流行的电子邮件服务之一。为了保障账户安全，腾讯邮箱要求在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端中，必须使用专门生成的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 进行登录，而非您的 QQ 登录密码。

:::tip
本指南的核心是获取 **<span style={{color: '#8e44ad'}}>“授权码”</span>**。这是一个由16个字符组成的字符串，用作第三方客户端的专用登录密码。
:::

## 一、核心参数配置 {#core-parameters-configuration}

在配置任何客户端之前，请确认您使用的是以下服务器设置：

| **服务类型** | **服务器地址** | **SSL端口** |
| :---: | :---: | :---: |
| <span style={{color: '#3578e5'}}>IMAP收信服务器</span> | `imap.qq.com` | `993` |
| <span style={{color: '#3578e5'}}>SMTP发信服务器</span> | `smtp.qq.com` | `465` |

## 二、获取授权码 {#get-authorization-code}

获取授权码的流程需要在QQ邮箱的网页版或官方客户端中完成，通常涉及安全验证。

### 1. 访问账户设置 {#access-account-settings}

登录 📚[QQ邮箱官网](https://mail.qq.com)，点击顶部的 <span style={{color: '#3578e5'}}>【设置】</span>，然后切换到 <span style={{color: '#3578e5'}}>【账户】</span> 标签页。

![进入QQ邮箱的“设置”->“账户”页面](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384602.png)
_图示：进入QQ邮箱的“设置”->“账户”页面_

### 2. 开启 IMAP/SMTP 服务 {#enable-imap-smtp-service}

向下滑动页面，找到“POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务”部分。如果服务尚未开启，请点击 <span style={{color: '#3578e5'}}>【开启】</span> 按钮。

![在账户设置中找到并准备开启IMAP/SMTP服务](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384603.png)
_图示：在账户设置中找到并准备开启IMAP/SMTP服务_

### 3. 完成安全验证 {#complete-security-verification}

开启服务需要进行安全验证。通常，这需要您使用绑定了该QQ号的手机发送一条指定的短信。

![根据提示发送短信以完成安全验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384604.png)
_图示：根据提示发送短信以完成安全验证_

---

发送短信后，点击 <span style={{color: '#3578e5'}}>【我已发送】</span>。在某些情况下，可能还需要通过微信扫码进行二次验证。

![点击“我已发送”按钮继续](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384605.png)
_图示：点击“我已发送”按钮继续_

![可能需要通过微信扫码进行二次验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384607.png)
_图示：可能需要通过微信扫码进行二次验证_

### 4. 获取并复制授权码 {#get-and-copy-code}

成功通过验证后，系统将生成并显示您的授权码。请立即点击 <span style={{color: '#3578e5'}}>【复制】</span> 并妥善保管。

![成功生成授权码并进行复制](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384609.png)
_图示：成功生成授权码并进行复制_

## 三、在客户端中配置 {#configure-in-client}

在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加邮箱时，在密码字段中粘贴刚刚复制的 **<span style={{color: '#8e44ad'}}>授权码</span>**。

![在第三方客户端的密码栏中输入获取的授权码](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384611.png)
_图示：在第三方客户端的密码栏中输入获取的授权码_

---

配置成功后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![邮箱成功添加后显示“正常”状态](https://cos.files.maozhishi.com/data/web/web-files/img/1721143384601.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“授权码”？为什么不能直接用QQ密码？**
> - 答：“授权码”是腾讯邮箱为第三方客户端生成的专用密码。使用授权码可以避免在第三方应用中暴露您的主QQ密码，极大地增强了账户的安全性。即使授权码泄露，您也可以随时在邮箱设置中禁用它，而不会影响您的QQ主账户。

- **❓ 我之前开启过IMAP服务，还需要重新获取授权码吗？**
> - 答：如果您忘记了之前生成的授权码，或者怀疑其已泄露，可以随时回到邮箱的账户设置页面，关闭服务再重新开启，即可生成一个新的授权码。每个客户端最好使用独立的授权码。

- **❓ @qq.com 和 @foxmail.com 的配置流程一样吗？**
> - 答：是的，完全一样。Foxmail邮箱是腾讯QQ邮箱的一个“别名”，它们共享同一套后台系统和安全策略，因此获取授权码的步骤和服务器设置是通用的。

### 学习建议 {#learning-suggestions}

- 🎯 **管理授权码**：建议为每个不同的第三方客户端生成独立的授权码，并为其添加备注。这样，当您不再使用某个客户端时，可以精确地禁用对应的授权码。
- 📖 **定期审查**：定期访问QQ邮箱网页版的“账户”设置，检查已开启的服务和已生成的授权码，确保没有未经授权的访问。
- ⚙️ **安全第一**：切勿将授权码告知他人，其安全级别等同于您的密码。

### 相关阅读 {#related-reading}

- 📚 [腾讯企业邮配置指南](./205-tengxun-qiyeyouxiang-tencent-enterprise-mailbox)
  - 如果您使用的是腾讯企业邮箱，请查阅此 **<span style={{color: '#8e44ad'}}>专属配置指南</span>**。
- 📚 [网易邮箱 (@163.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 了解 **<span style={{color: '#8e44ad'}}>网易邮箱</span>** 获取授权码的流程，它与腾讯邮箱的机制相似。
- 📚 [搜狐邮箱 (@sohu.com) 配置指南](./105-souhu-sohuyouxiang-sohu-personal-email)
  - 查看 **<span style={{color: '#8e44ad'}}>搜狐邮箱</span>** 是如何生成其“独立密码”（即授权码）的。
- 📚 [苹果iCloud邮箱配置指南](./113-pingguo-icloudyouxiang-apple-personal-email)
  - 对比了解 Apple iCloud 邮箱的 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** 安全机制。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

🔗 **本文永久链接：** https://laifa.xin/youxiang/106-tengxun-qqyouxiang-tencent-personal-email
