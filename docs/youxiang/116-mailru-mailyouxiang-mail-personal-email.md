---
id: 116-mailru-mailyouxiang-mail-personal-email
title: 'Mail.ru邮箱(@mail.ru): 应用专用密码登录'
description: '本文详细讲解如何在第三方客户端（如来发信）中设置 Mail.ru Mail (@mail.ru)。内容覆盖登录 Mail.ru 账户、开启两步验证、生成并使用“应用专用密码”（App Password）完成绑定的完整步骤。'
tags: ['Mail.ru', '应用专用密码', 'App Password', 'IMAP', 'SMTP', '两步验证', '邮箱配置']
keywords:
  [
    'Mail.ru',
    'mail.ru',
    'IMAP',
    'SMTP',
    '应用专用密码',
    'App Password',
    '两步验证',
    '2FA',
    '邮箱配置',
    '俄罗斯邮箱',
  ]
---

# Mail.ru邮箱(@mail.ru): 应用专用密码登录

Mail.ru 是俄罗斯最大的电子信箱服务网站之一，也是该国发展最快的网络资源之一。为实现最高级别的账户安全，Mail.ru 强烈建议用户开启 **<span style={{color: '#8e44ad'}}>“两步验证”</span>** (Two-factor authentication) 并使用专门生成的 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** (App Password) 在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端中进行登录。

:::info
由于网络环境因素，直接访问 Mail.ru 可能会遇到困难。👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 拥有海外邮件收发节点，无需额外代理即可顺畅连接 Mail.ru 服务器。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置 Mail.ru 时，请使用以下服务器参数：

| **服务类型** | **服务器地址** | **SSL 端口** |
| :----------- | :------------- | :----------- |
| IMAP (收信)  | `imap.mail.ru` | 993          |
| SMTP (发信)  | `smtp.mail.ru` | 465          |

## 二、生成应用专用密码 {#generate-app-password}

为第三方客户端生成密码是保障主账户安全的关键步骤。

### 1. 访问安全设置 {#access-security-settings}

- 登录您的 Mail.ru 账户。
- 导航至 <span style={{color: '#3578e5'}}>【Password & Security】</span> (密码与安全) 设置页面。
- 找到并点击 <span style={{color: '#3578e5'}}>【App passwords】</span> (部分账户可能显示为“External application passwords”)。

![访问“应用专用密码”设置](https://cos.files.maozhishi.com/data/web/web-files/img/1721145171266.png)
_图示：访问“应用专用密码”设置_

:::tip
如果这是您首次创建应用密码，Mail.ru 可能会强制要求您先 **开启两步验证**。请根据页面提示完成设置，这能极大提升您的账户安全性。
:::

### 2. 创建并复制密码 {#create-and-copy-password}

- 在创建密码前，系统可能会要求您完成一次人机身份验证。

![完成人机身份验证](https://cos.files.maozhishi.com/data/web/web-files/img/1721145171267.png)
_图示：完成人机身份验证_

- 为您的应用密码输入一个便于识别的名称（例如“来发信”），然后点击创建。
- 系统将生成一个唯一的应用密码。请立即 **复制** 并妥善保管此密码。

![生成并复制应用专用密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721145171268.png)
_图示：生成并复制应用专用密码_

## 三、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的应用专用密码**。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用应用专用密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1721145171272.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“应用专用密码”？**

  > - 答：“应用专用密码”是 Mail.ru 为第三方客户端生成的特定密码。使用它登录，可以在不暴露主账户密码的情况下授权应用访问您的邮件，从而极大地增强账户安全性。

- **❓ 无法访问 Mail.ru 官网怎么办？**
  > - 答：部分地区的网络环境可能导致 Mail.ru 访问缓慢或中断。您可以直接在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中配置您的账户，利用其海外节点进行稳定的邮件收发。但在初次配置获取专用密码时，仍需访问一次官网。

### 学习建议 {#learning-suggestions}

- 🔐 **强制两步验证**：强烈建议为您的 Mail.ru 账户开启 <u><span style={{color: '#e67c00'}}>两步验证</span></u>。这是保护您数字资产安全的最有效方法之一。
- 📝 **安全存储**：将生成的 <u><span style={{color: '#e67c00'}}>应用专用密码</span></u> 立即保存在安全的密码管理器中，避免遗忘或泄露。
- 🔄 **定期审查**：定期访问 Mail.ru 的 <span style={{color: '#3578e5'}}>【App passwords】</span> 页面，检查并清理不再使用的密码，保持账户安全。

### 相关阅读 {#related-reading}

- 📚 [Yandex Mail (@yandex.com) 配置指南](./115-yandex-yandexyouxiang-yandex-personal-email)
  - 了解同为俄罗斯主流服务商 Yandex 的 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 设置流程。
- 📚 [谷歌邮箱 (Gmail) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 对比了解谷歌Gmail在开启两步验证后，是如何生成和使用 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 的。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/116-mailru-mailyouxiang-mail-personal-email
