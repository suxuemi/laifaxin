---
id: 115-yandex-yandexyouxiang-yandex-personal-email
title: "Yandex邮箱(yandex): 应用密码登录"
description: "本文详细讲解如何在第三方客户端（如来发信）中设置 Yandex Mail (@yandex.com)。内容覆盖开启 IMAP/POP3 协议、登录 Yandex ID 管理页面、生成并使用“应用密码”（App Password）完成绑定的完整步骤。"
tags:
  [
    "Yandex Mail",
    "Yandex",
    "应用密码",
    "App Password",
    "IMAP",
    "SMTP",
    "邮箱配置",
  ]
keywords:
  [
    "Yandex Mail",
    "Yandex",
    "yandex.com",
    "IMAP",
    "SMTP",
    "POP3",
    "应用密码",
    "App Password",
    "两步验证",
    "邮箱配置",
    "俄罗斯邮箱",
  ]
---

# Yandex邮箱(yandex): 应用密码登录

Yandex Mail 是俄罗斯最主要网络服务门户 Yandex 提供的电子邮件服务。为保障账户安全，当您在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方邮件客户端中配置 Yandex 邮箱时，**必须** 首先开启邮件协议（IMAP/POP3），然后生成并使用专用的 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** (App Password) 进行登录，而不是您的主账户密码。

:::warning
在生成应用密码前，您 **必须** 先在 Yandex 邮箱设置中启用 IMAP 或 POP3 协议，否则第三方客户端将无法访问您的邮件。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置 Yandex Mail 时，请使用以下服务器参数：

| **服务类型** | **服务器地址**    | **SSL 端口** |
| :----------- | :---------------- | :----------- |
| IMAP (收信)  | `imap.yandex.com` | 993          |
| SMTP (发信)  | `smtp.yandex.com` | 465          |

## 二、开启 IMAP/POP3 协议 {#enable-imap-pop3-protocol}

在生成应用密码之前，请先登录 Yandex 邮箱官网，确保邮件客户端的访问权限已开启。

### 1. 进入邮箱设置 {#access-email-settings}

- 登录 Yandex Mail 官网：[https://mail.yandex.com/](https://mail.yandex.com/)
- 点击邮箱主界面右上角的齿轮图标 ⚙️，然后选择 <span style={{color: '#3578e5'}}>【All settings】</span>。

![进入 Yandex Mail 所有设置](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717171.png)
_图示：进入 Yandex Mail 所有设置_

### 2. 启用客户端协议 {#enable-client-protocols}

- 在设置页面左侧菜单中，点击 <span style={{color: '#3578e5'}}>【Email clients】</span>。
- 确保勾选 <span style={{color: '#3578e5'}}>【From the imap.yandex.com server via IMAP】</span> 选项。如果您需要，也可以同时勾选 POP3 协议的选项。
- 点击 <span style={{color: '#3578e5'}}>【Save changes】</span> 保存设置。

![启用 IMAP/POP3 协议并保存更改](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717172.png)
_图示：启用 IMAP/POP3 协议并保存更改_

## 三、生成应用密码 {#generate-app-password}

启用邮件协议后，您需要为来发信客户端创建一个专用的应用密码。

### 1. 访问账户管理 {#access-account-management}

- 在邮箱主界面，点击右上角的个人头像，从下拉菜单中选择 <span style={{color: '#3578e5'}}>【Account management】</span>。

![进入 Yandex 账户管理](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717173.png)
_图示：进入 Yandex 账户管理_

### 2. 进入应用密码设置 {#navigate-to-app-passwords}

- 在账户管理页面，从上方导航栏进入 <span style={{color: '#3578e5'}}>【Security】</span> 标签页。
- 向下滚动找到并点击 <span style={{color: '#3578e5'}}>【App passwords】</span>。

![在安全设置中选择"应用密码"](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717174.png)
_图示：在安全设置中选择“应用密码”_

### 3. 创建并复制密码 {#create-and-copy-password}

- 在 <span style={{color: '#3578e5'}}>【Create a new password】</span> 部分，点击 <span style={{color: '#3578e5'}}>【Yandex Mail】</span> 旁边的 "+" 号。

![选择为 Yandex Mail 创建新密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717175.png)
_图示：选择为 Yandex Mail 创建新密码_

- 为密码输入一个便于识别的名称（例如“来发信”），然后点击 <span style={{color: '#3578e5'}}>【Create】</span>。

![为应用密码命名以便于识别](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717176.png)
_图示：为应用密码命名以便于识别_

- 系统会生成一个唯一的应用密码。请立即 **复制** 并妥善保管此密码，因为它只会出现一次。

![成功生成并复制 Yandex 应用密码](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717170.png)
_图示：成功生成并复制 Yandex 应用密码_

## 四、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的应用密码**。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用应用密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1721145717178.png)
_图示：邮箱成功添加后显示“正常”状态_

## 五、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 为什么需要单独开启 IMAP/POP3 协议？**

  > - 答：出于安全考虑，Yandex 默认关闭了外部客户端通过 IMAP/POP3 协议的访问。您必须手动授权，允许第三方应用（如来发信）通过此协议来同步您的邮件。

- **❓ 如果忘记了应用密码怎么办？**
  > - 答：应用密码无法找回。如果您忘记或丢失了它，可以回到 <span style={{color: '#3578e5'}}>【App passwords】</span> 管理页面，删除旧密码并重新生成一个。

### 学习建议 {#learning-suggestions}

- 🔐 **一客一码**：为每个不同的第三方客户端或设备生成独立的 <u><span style={{color: '#e67c00'}}>应用密码</span></u>，并清晰命名，便于未来管理或单独撤销授权。
- 🔄 **定期审查**：定期访问 Yandex ID 的 <span style={{color: '#3578e5'}}>【Security】</span> 页面，检查并清理不再使用的应用密码，保持账户的整洁与安全。

### 相关阅读 {#related-reading}

- 📚 [谷歌邮箱 (Gmail) 配置指南](./101-guge-gmailyouxiang-google-personal-email)
  - 了解谷歌Gmail在开启两步验证后，是如何生成和使用 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 的。
- 📚 [微软邮箱 (@outlook.com) 配置指南](./108-weiruan-outlookyouxiang-microsoft-personal-email)
  - 学习微软邮箱在开启双重验证后如何创建和使用 **<span style={{color: '#8e44ad'}}>“应用密码”</span>**。
- 📚 [AOL Mail (@aol.com) 配置指南](./114-aol-aolyouxiang-aol-personal-email)
  - 参考 AOL Mail 生成 **<span style={{color: '#8e44ad'}}>“应用程序密码”</span>** 的流程，它同样无需强制开启两步验证。
- 📚 [Mail.ru Mail (@mail.ru) 配置指南](./116-mailru-mailyouxiang-mail-personal-email)
  - 了解同为俄罗斯主流服务商 Mail.ru 的 **<span style={{color: '#8e44ad'}}>“应用专用密码”</span>** 设置流程。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/115-yandex-yandexyouxiang-yandex-personal-email
