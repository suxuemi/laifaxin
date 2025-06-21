---
id: 112-wanmei-88youxiang-perfect-personal-mailbox
title: '完美邮箱 (@88.com): IMAP/SMTP 与专用密码配置'
description: '本文详细讲解如何在第三方客户端（如来发信）绑定完美邮箱（@88.com, @111.com, @email.cn），内容覆盖开启IMAP/SMTP服务、生成并使用“专用密码”完成登录的完整步骤。'
tags: ['完美邮箱', '88.com', '111.com', 'email.cn', 'IMAP', 'SMTP', '专用密码']
keywords:
  [
    '完美邮箱',
    '88.com',
    '111.com',
    'email.cn',
    'IMAP',
    'SMTP',
    'POP3',
    '专用密码',
    '邮箱配置',
    '授权码',
  ]
---

# 完美邮箱 (@88.com): IMAP/SMTP 与专用密码配置

完美邮箱（Perfect Mail）旗下拥有 `@88.com`、`@111.com`、`@email.cn` 等多个域名，专注于提供高效的商务邮件服务。为保障账户安全，当您在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 等第三方客户端上配置完美邮箱时，必须使用专门生成的 **<span style={{color: '#8e44ad'}}>“专用密码”</span>** 进行登录，而非您的主账户密码。

:::tip
本指南以 `@88.com` 为例进行演示，其操作步骤同样适用于 `@111.com` 和 `@email.cn` 域名。
:::

## 一、IMAP/SMTP 参数配置 {#imap-smtp-parameters}

在客户端中手动配置完美邮箱时，请使用对应域名的服务器参数。以下为 `@88.com` 的配置：

| **服务类型** | **服务器地址** | **SSL 端口** |
| :----------- | :------------- | :----------- |
| IMAP (收信)  | `imap.88.com`  | 993          |
| SMTP (发信)  | `smtp.88.com`  | 465          |

- **@111.com**: IMAP服务器为 `imap.111.com`，SMTP服务器为 `smtp.111.com`。
- **@email.cn**: IMAP服务器为 `imap.email.cn`，SMTP服务器为 `smtp.email.cn`。

## 二、获取专用密码 {#get-special-password}

获取 **<span style={{color: '#8e44ad'}}>“专用密码”</span>** 是在第三方客户端成功配置完美邮箱的核心环节。

### 1. 开启IMAP/SMTP服务 {#enable-imap-smtp-service}

首先，您需要登录完美邮箱网页版，开启客户端访问服务。

- 打开完美邮箱官网并登录。
- 进入 <span style={{color: '#3578e5'}}>【设置】</span>，在左侧菜单中选择 <span style={{color: '#3578e5'}}>【客户端设置】</span>。
- 确保 **<span style={{color: '#3578e5'}}>“IMAP/SMTP”</span>** 和 **<span style={{color: '#3578e5'}}>“POP3/SMTP”</span>** 服务均处于已开启状态。

![在完美邮箱后台设置中开启IMAP/SMTP服务](https://cos.files.maozhishi.com/data/web/web-files/img/1721144752842.png)
_图示：开启IMAP/SMTP和POP3/SMTP服务_

### 2. 生成专用密码 {#generate-special-password}

服务开启后，在同一页面下方找到“专用密码”部分进行创建。

- 点击 <span style={{color: '#3578e5'}}>【新建专用密码】</span> 按钮。
- 在弹出的窗口中，输入一个便于您记忆的名称（例如“来发信客户端”），然后点击 <span style={{color: '#3578e5'}}>【确定】</span>。

![为专用密码设置一个可识别的名称](https://cos.files.maozhishi.com/data/web/web-files/img/1721144752845.png)
_图示：为专用密码设置一个可识别的名称_

- 系统将生成一个16位的专用密码。请立即点击 <span style={{color: '#3578e5'}}>【复制】</span> 并妥善保管该密码。

![成功生成16位专用密码并复制](https://cos.files.maozhishi.com/data/web/web-files/img/1721144752846.png)
_图示：成功生成16位专用密码并复制_

## 三、配置来发信客户端 {#configure-laifaxin-client}

获取 **<span style={{color: '#8e44ad'}}>“专用密码”</span>** 后，即可在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中完成绑定。

- 在添加邮箱账户时，于 <span style={{color: '#3578e5'}}>“密码”</span> 字段中 **粘贴上一步生成的16位专用密码**。
- 系统验证通过后，您的邮箱状态将显示为 <span style={{color: '#3578e5'}}>【正常】</span>。

![在来发信中使用专用密码完成邮箱绑定](https://cos.files.maozhishi.com/data/web/web-files/img/1721144752841.png)
_图示：邮箱成功添加后显示“正常”状态_

## 四、拓展与资源 {#expansion-and-resources}

### 常见问题 {#faq}

- **❓ 什么是“专用密码”？**

  > - 答：“专用密码”是完美邮箱为第三方客户端生成的特定密码，用于授权应用访问您的账户，而无需暴露您的主登录密码，从而增强账户安全性。

- **❓ 如果忘记了专用密码怎么办？**

  > - 答：专用密码无法找回。如果您忘记或丢失了它，可以回到网页版的 <span style={{color: '#3578e5'}}>【客户端设置】</span> 页面，删除旧的专用密码记录，然后重新生成一个新的即可。

- **❓ 这个指南适用于 `@111.com` 和 `@email.cn` 吗？**
  > - 答：是的。整个流程完全相同，唯一的区别是在手动配置时，需要将服务器地址中的 `88.com` 替换为您实际使用的域名（`111.com` 或 `email.cn`）。

### 学习建议 {#learning-suggestions}

- 🔐 **一客一码**：为每个不同的第三方客户端或设备生成独立的 <u><span style={{color: '#e67c00'}}>专用密码</span></u>，并清晰命名，便于未来管理或单独撤销授权。
- 📝 **安全存储**：将生成的 <u><span style={{color: '#e67c00'}}>专用密码</span></u> 立即保存在安全的密码管理器中，避免遗忘或泄露。
- 🔄 **定期审查**：定期访问完美邮箱的 <span style={{color: '#3578e5'}}>【客户端设置】</span> 页面，检查并清理不再使用的专用密码，保持账户的整洁与安全。

### 相关阅读 {#related-reading}

- 📚 [新浪邮箱 (@sina.com) 配置指南](./109-xinlang-sinayouxiang-sina-personal-email)
  - 了解新浪邮箱获取 **<span style={{color: '#8e44ad'}}>“客户端授权码”</span>** 的流程。
- 📚 [移动139邮箱 (@139.com) 配置指南](./110-yidong-139youxiang-china-mobile-personal-email)
  - 参考中国移动139邮箱设置 **<span style={{color: '#8e44ad'}}>“客户端密码”</span>** 的方法。
- 📚 [腾讯邮箱 (@qq.com) 配置指南](./106-tengxun-qqyouxiang-tencent-personal-email)
  - 了解国内主流服务商腾讯邮箱的 **<span style={{color: '#8e44ad'}}>“授权码”</span>** 登录机制。
- 📚 [网易邮箱 (@163.com) 配置指南](./107-wangyi-163youxiang-netease-personal-email)
  - 探索网易邮箱体系中类似的 **<span style={{color: '#8e44ad'}}>“客户端授权密码”</span>** 设置流程。
- 📚 [搜狐邮箱 (@sohu.com) 配置指南](./105-souhu-sohuyouxiang-sohu-personal-email)
  - 查看搜狐邮箱获取 **<span style={{color: '#8e44ad'}}>“应用密码”</span>** 的具体步骤。
- 📚 [苹果iCloud邮箱配置指南](./113-pingguo-icloudyouxiang-apple-personal-email)
  - 对比学习 Apple iCloud 邮箱是如何生成并使用 **<span style={{color: '#8e44ad'}}>“App 专用密码”</span>** 的。
- 📚 [邮箱账号管理](../zhinan/email-account)
  - 学习如何在 👉 [**<span style={{color: '#e67c00'}}>来发信</span>**](https://laifaxin.com) 中添加、暂停、编辑或删除已连接的 **<span style={{color: '#8e44ad'}}>邮箱账号</span>**，实现对所有邮箱的集中管理。

---

🔗 **本文永久链接：** https://laifa.xin/youxiang/112-wanmei-88youxiang-perfect-personal-mailbox
